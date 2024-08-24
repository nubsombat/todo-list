import { useToast } from "@/components/ui/use-toast";
import { logError, getErrorMessage } from "@/utils/errorHandling";

export function useErrorHandler() {
  const { toast } = useToast();

  const handleError = (error: unknown) => {
    logError(error);
    toast({
      title: "Error",
      description: getErrorMessage(error) || "An error occurred. Please try again.",
      variant: "destructive",
    });
  };

  return handleError;
}