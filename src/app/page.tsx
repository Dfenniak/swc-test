import styles from './page.module.css'
import { useI18n } from '@shopify/react-i18n'

export default function Home() {
  const [i18n] = useI18n()

  return (
    <main className={styles.main}>
    { i18n.translate('Some.key') }
    </main>
  )
}
