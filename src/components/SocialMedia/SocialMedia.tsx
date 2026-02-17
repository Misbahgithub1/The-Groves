import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTiktok, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialMedia.module.scss';

interface SocialMediaProps {
  fontSize?: string;
  className?: string; // optional custom class
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  fontSize = '1.25rem',
  className = '',
}) => {
  return (
    <div className={`${styles.SocialMedia} ${className}`}>
      <a href="#" aria-label="TikTok">
        <FontAwesomeIcon icon={faTiktok} style={{ fontSize }} />
      </a>

      <a href="#" aria-label="Instagram" className={styles.filledIcon}>
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize }} />
      </a>

      <a href="#" aria-label="X">
        <FontAwesomeIcon icon={faTwitter} style={{ fontSize }} />
      </a>

      <a href="#" aria-label="Snapchat" className={styles.filledIcon}>
        <FontAwesomeIcon icon={faSnapchat} style={{ fontSize }} />
      </a>
    </div>
  );
};

export default SocialMedia;
