import { useUIStore } from "@/stores/ui/ui.store";

export const useToast = () => {
    const isToastOpen = useUIStore((state) => state.isToastOpen);
    const openToast = useUIStore((state) => state.openToast);
    const closeToast = useUIStore((state) => state.closeToast);

    return {isToastOpen, openToast, closeToast};
};