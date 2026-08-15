import { SectionHeader } from "@/components/ui/section-header";
import { LocationMap } from "@/components/contact/location-map";

export function LocationSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Find Us" title="Visit the clinic in Ganj Golai, Latur" />
        <div className="mt-12">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
