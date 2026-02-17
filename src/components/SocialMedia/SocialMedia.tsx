import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTiktok, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialMedia.module.scss';

const SocialMedia: React.FC = () => {
  return (
    <div className={styles.SocialMedia}>
      <a href="#" aria-label="TikTok">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a href="#" aria-label="Instagram" className={styles.filledIcon}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" aria-label="X">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" aria-label="Snapchat" className={styles.filledIcon}>
        <FontAwesomeIcon icon={faSnapchat} />
      </a>
    </div>
  );
};

export default SocialMedia;
