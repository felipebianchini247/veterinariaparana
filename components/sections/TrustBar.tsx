import { Star, Users, HeartHandshake, Zap } from "lucide-react";
import { STATS } from "@/lib/constants";

const icons = [Star, Users, HeartHandshake, Zap];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-0 lg:divide-x divide-gray-100">
          {STATS.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div
                key={stat.label}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:px-8 first:pl-0 last:pr-0"
              >
                <div className="w-12 h-12 bg-brand-muted rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-heading text-3xl font-bold text-brand leading-none">
                    {stat.value}
                  </p>
                  <p className="font-semibold text-gray-900 text-sm mt-1">{stat.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
