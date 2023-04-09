import { useStyletron } from 'baseui'

type Props = {
  size?: number
}

export default function CameraIcon({ size = 24 }: Props) {
  const [, theme] = useStyletron()

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={theme.colors.backgroundPrimary}>
      <path d="M12 8C10.3 8 9 9.3 9 11C9 12.7 10.3 14 12 14C13.7 14 15 12.7 15 11C15 9.3 13.7 8 12 8M4 4H6V2H10V4H16V2H18V4H20C21.1 4 22 4.9 22 6V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6C2 4.9 2.9 4 4 4M20 18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V8H20V18Z" />
      <circle fill={theme.colors.primary} cx="12" cy="11" r="3" />
    </svg>
  )
}
