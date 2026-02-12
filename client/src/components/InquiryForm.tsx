import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "./Button";
import { Loader2 } from "lucide-react";
import { z } from "zod";

type FormData = z.infer<typeof insertInquirySchema>;

export function InquiryForm() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<FormData>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      eventDate: "",
      guestCount: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-xl mx-auto">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
            <input
              {...form.register("name")}
              className="w-full bg-transparent border-b border-border py-2 focus:border-foreground focus:outline-none transition-colors"
              placeholder="Your Name"
            />
            {form.formState.errors.name && (
              <span className="text-xs text-destructive">{form.formState.errors.name.message}</span>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input
              {...form.register("email")}
              className="w-full bg-transparent border-b border-border py-2 focus:border-foreground focus:outline-none transition-colors"
              placeholder="email@example.com"
            />
            {form.formState.errors.email && (
              <span className="text-xs text-destructive">{form.formState.errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Event Date</label>
            <input
              {...form.register("eventDate")}
              className="w-full bg-transparent border-b border-border py-2 focus:border-foreground focus:outline-none transition-colors"
              placeholder="Preferable Date"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Guest Count</label>
            <input
              {...form.register("guestCount")}
              className="w-full bg-transparent border-b border-border py-2 focus:border-foreground focus:outline-none transition-colors"
              placeholder="Estimated Count"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
          <textarea
            {...form.register("message")}
            rows={4}
            className="w-full bg-transparent border-b border-border py-2 focus:border-foreground focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your dream event..."
          />
          {form.formState.errors.message && (
            <span className="text-xs text-destructive">{form.formState.errors.message.message}</span>
          )}
        </div>
      </div>

      <div className="text-center pt-8">
        <Button type="submit" disabled={isPending} className="min-w-[200px]">
          {isPending ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin w-4 h-4" /> Sending...
            </span>
          ) : (
            "Send Inquiry"
          )}
        </Button>
      </div>
    </form>
  );
}
