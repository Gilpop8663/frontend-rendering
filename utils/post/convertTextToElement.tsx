export const convertTextToElement = (text: string) => {
  const linkPattern = /\[\[([^[\]]+)\]\]/g;

  const parts = text.split(linkPattern);

  const elementList = parts.map((part, index) => {
    if (index % 2 === 1) {
      // 링크
      const linkText = part;
      const linkUrl = linkText.startsWith('http' || 'https')
        ? linkText
        : `https://${linkText}`;
      return (
        <a
          key={index}
          href={linkUrl}
          target="_blank"
          style={{ textDecoration: 'underline', color: '#004EC5' }}
          rel="noreferrer noopener"
        >
          {linkText}
        </a>
      );
    }

    // 링크가 아닌 문자열
    return <span key={index}>{part}</span>;
  });

  return elementList;
};
