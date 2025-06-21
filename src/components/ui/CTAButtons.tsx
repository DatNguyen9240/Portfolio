'use client';

import { Button } from './Button';

export function CTAButtons() {
  const handleContactClick = () => {
    console.log('Contact us clicked');
  };

  const handleApplyClick = () => {
    console.log('Apply clicked');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Button className="px-8 py-3 text-lg" onClick={handleContactClick}>
        Contact us
      </Button>
      <Button variant="outline" className="px-8 py-3 text-lg" onClick={handleApplyClick}>
        Apply
      </Button>
    </div>
  );
}
