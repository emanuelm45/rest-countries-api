export default function Footer() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%)',
        width: '80%',
        textAlign: 'center'
      }}
    >
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        style={{ textDecoration: 'underline' }}
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://github.com/emanuelmarques45"
        target="_blank"
        style={{ textDecoration: 'underline' }}
      >
        Emanuel Marques
      </a>
      .
    </div>
  )
}
