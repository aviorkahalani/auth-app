import { FaTwitter, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa'

const Socials = () => {
  const socials = [
    { icon: <FaGoogle />, label: 'Google' },
    { icon: <FaFacebook />, label: 'Facebook' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaGithub />, label: 'Github' },
  ]

  return (
    <div className="my-4 flex gap-4 justify-center">
      {socials.map((social) => (
        <button
          className="text-gray-500 text-2xl transition-colors hover:text-gray-600 border border-gray-500 p-3 rounded-full"
          key={social.label}
        >
          {social.icon}
        </button>
      ))}
    </div>
  )
}

export default Socials
