import { useEffect, useState } from "react";

const REFERRAL_KEY = "bluepin_ref";

export function useReferral() {
  const [ref, setRef] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check URL params first
    const params = new URLSearchParams(window.location.search);
    const refParam = params.get("ref");

    // Get existing ref from localStorage
    const storedRef = localStorage.getItem(REFERRAL_KEY);

    if (refParam) {
      // New ref from URL takes priority
      localStorage.setItem(REFERRAL_KEY, refParam);
      setRef(refParam);
    } else if (storedRef) {
      // Use existing ref from previous visits
      setRef(storedRef);
    }

    setIsLoading(false);
  }, []);

  const getReferralCode = () => {
    return localStorage.getItem(REFERRAL_KEY) || null;
  };

  return { ref, isLoading, getReferralCode };
}
