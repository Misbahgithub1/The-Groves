import { Container } from 'react-bootstrap';
import Button from '../Button/Button';
import MasonryCarousel, { type MasonryCarouselItem } from '../MasonryCarousel';
import styles from './AttractionsSection.module.scss';

const SLIDER_ITEMS: MasonryCarouselItem[] = [
  { title: 'Little Krazy', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=533&fit=crop', size: 'portrait' },
  { title: 'Hawanim Groves City', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=533&fit=crop', size: 'portrait' },
  { title: 'Picnic Market', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', size: 'landscape' },
  { title: 'Lucawa', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', size: 'landscape' },
  { title: 'The Grove', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop', size: 'square' },
];

export default function AttractionsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Book General Access ticket and <br/>enjoy the attractions for free
          </h2>
          <Button text="Book General Access Ticket" showArrow />
        </div>

        <MasonryCarousel
          items={SLIDER_ITEMS}
          interval={4500}
          ariaLabel="Attractions carousel"
        />
      </Container>
    </section>
  );
}
