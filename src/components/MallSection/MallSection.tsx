import { Container } from 'react-bootstrap';
import styles from './MallSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function MallSection() {
  return (
    <section className={styles.section}>
      <Container className="text-center">
        <h2 className={styles.heading}>Mall Of: Endless Possibilities</h2>
        <p className={styles.intro}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <div className={styles.videoWrapper}>
          <a
            href="https://www.youtube.com/watch?v=jcxFQM6Pglk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoLink}
          >
          
          </a>
          <div className={styles.videoEmbed}>
            <iframe
              src="https://www.youtube.com/embed/jcxFQM6Pglk"
              title="Mall video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

     {/* Card */}
     <div className={`${styles.cardWrapper} d-flex justify-content-center mt-4`}>
          <a href="#" className={`card ${styles.card}`}>
            <div className="card-body">
              <p className={styles.price}>25 SR/GUEST</p>
              <h2 className={styles.cardTitle}>Get your General Access Ticket</h2>
              <p className={`card-desc ${styles.cardDesc}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>

            <div className={styles.arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        </div>


      </Container>
    </section>
  );
}
