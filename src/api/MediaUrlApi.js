import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MediaUrl(id) {
  const [mediaUrl, setMediaUrl] = useState('');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(
          `https://www.deltawebservices.net/wp-json/wp/v2/media/${id}`
        );
        setMediaUrl(response.data.source_url);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchMedia();
    } else {
      setMediaUrl('');
    }
  }, [id]);

  return mediaUrl;
}