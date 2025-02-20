'use client'

import { useStripe } from '@/app/hooks/useStripe'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'

export function PlanButtons() {
  const { createStripeCheckout } = useStripe()
  const { profileId } = useParams()

  return (
    <div className="flex gap-4">
      <Button
        onClick={() =>
          createStripeCheckout({
            isSubscription: true,
            metadata: { profileId },
          })
        }
      >
        R$ 9,90/mês
      </Button>
      <Button
        onClick={() =>
          createStripeCheckout({
            isSubscription: false,
            metadata: { profileId },
          })
        }
      >
        R$ 99,90 vitalício
      </Button>
    </div>
  )
}
