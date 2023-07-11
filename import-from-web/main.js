import { animate } from 'https://motion.dev/guides/quick-start#create-an-animation'

animate(
  '#box',
  { rotate: 90 },
  {
    duration: 0.5,
    easing: 'ease-in-out',
    repeat: 3,
    direction: 'alternate',
  }
)
