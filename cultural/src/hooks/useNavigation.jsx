import { useNavigate, useLocation } from "react-router-dom"

export function useNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const goTo = (path, options = {}) => {
    navigate(path, options)
  }

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  const isCurrentPath = (path) => {
    return location.pathname === path
  }

  const isPathActive = (path) => {
    return location.pathname.startsWith(path)
  }

  return {
    goTo,
    goBack,
    goForward,
    isCurrentPath,
    isPathActive,
    currentPath: location.pathname,
    location,
  }
}
