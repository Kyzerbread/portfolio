import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

import { Linkedin, GitHub } from 'react-feather';

const linkStyle = {
  cursor: 'pointer'
}

export default function Footer() {



  const handleGithub = () => window.open('https://github.com/Kyzerbread', '_blank');
  const handleLuinkedIn = () => window.open('https://linkedin.com/in/jeremy-kaiser-445115a4', '_blank');

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <GitHub style={linkStyle} onClick={handleGithub}/> <Linkedin style={linkStyle} onClick={handleLuinkedIn} />
        </div>
      </Container>
    </footer>
  )
}
