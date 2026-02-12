import { useState, useEffect, useRef } from 'react';

interface UseLeadPopupOptions {
  showAfterSeconds?: number;
  showOnExitIntent?: boolean;
  maxShowCount?: number;
}

export function useLeadPopup(options: UseLeadPopupOptions = {}) {
  const {
    showAfterSeconds = 3, // Show after 3 seconds
    // exit intent removed per user request; popup will only use timed trigger
    showOnExitIntent = false,
    maxShowCount = 2, // Show max 2 times per session
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [showCount, setShowCount] = useState(0);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const storageKey = 'lead_popup_shown';

    // Use sessionStorage so popups re-appear on new sessions/refreshs during dev/testing
    const getCount = () => parseInt(sessionStorage.getItem(storageKey) || '0');

    let previousCount = getCount();
    console.log(`[useLeadPopup] previousCount=${previousCount}, maxShowCount=${maxShowCount}`);

    // In development on localhost, allow resetting the session counter automatically
    // so developers can refresh and test the popup repeatedly without manual clearing.
    const isLocalDev = typeof window !== 'undefined' && (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname === '::1'
    );

    if (previousCount >= maxShowCount) {
      if (isLocalDev) {
        console.log('[useLeadPopup] development reset: clearing session count to allow popup testing');
        sessionStorage.removeItem(storageKey);
        previousCount = getCount();
      } else {
        console.log('[useLeadPopup] popup suppressed: maxShowCount reached');
        return;
      }
    }

    // Timed trigger only (no exit-intent)
    console.log(`[useLeadPopup] scheduling popup in ${showAfterSeconds}s`);
    const timeoutId = window.setTimeout(() => {
      const currentCount = getCount();
      console.log(`[useLeadPopup] timeout fired, currentCount=${currentCount}`);
      if (currentCount >= maxShowCount) {
        console.log('[useLeadPopup] popup aborted in timeout: maxShowCount reached');
        return;
      }
      setIsOpen(true);
      const newCount = currentCount + 1;
      setShowCount(newCount);
      sessionStorage.setItem(storageKey, String(newCount));
      console.log(`[useLeadPopup] opened popup, newCount=${newCount}`);
    }, showAfterSeconds * 1000);
    timeoutRef.current = timeoutId;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
    // Intentionally run only when timing or max count changes
  }, [showAfterSeconds, maxShowCount]);

  const handleClose = () => {
    console.log('[useLeadPopup] handleClose called — closing popup');
    // clear any pending timeout to avoid unexpected reopen
    try {
      // @ts-ignore
      if (timeoutRef?.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    } catch (err) {
      // ignore
    }
    setIsOpen(false);
  };

  const handleSubmit = (data: any) => {
    console.log('Lead captured:', data);
    // Here you would send data to your backend
    // Save to localStorage as backup
    const existingLeads = JSON.parse(localStorage.getItem('captured_leads') || '[]');
    existingLeads.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem('captured_leads', JSON.stringify(existingLeads));
  };

  return { isOpen, handleClose, handleSubmit };
}
