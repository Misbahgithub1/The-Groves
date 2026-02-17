import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './CuisineSection.module.scss';

export interface CuisineCardItem {
  name: string;
  subText: string;
  image: string;
  href?: string;
}

const CARDS: CuisineCardItem[] = [
  {
    name: 'Vida Vera',
    subText: '100 SR PER GUEST',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
  },
  {
    name: 'Zama Zulu',
    subText: '100 SR PER GUEST',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
  },
  {
    name: 'The Grove',
    subText: '85 SR PER GUEST',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
  },
  {
    name: 'Harrods',
    subText: '120 SR PER GUEST',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
  },
];

export default function CuisineSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>Experience the Finest Cuisine</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <Row className="g-4">
          {CARDS.map((card, index) => (
            <Col key={index} xs={12} md={6}>
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.name} loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{card.name}</h3>
                  <div className={styles.cardFooter}>
                    <span className={styles.badge}>{card.subText}</span>
                    <button
                      type="button"
                      className={styles.arrowButton}
                      aria-label={`View ${card.name}`}
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
