import { CARDS } from '@/lib/cards';
import { CardItem } from './CardItem';

export function CardGrid() {
  return (
    <section id="karten" className="py-16 sm:py-24">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto text-center mb-10">
          <span className="eyebrow">Deine Auswahl</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {CARDS.map((card) => (
            <CardItem key={card.id} card={card} source="home" />
          ))}
        </div>
      </div>
    </section>
  );
}
