import Image, { type ImageProps } from 'next/image'
import { Button } from '@repo/ui/button'
import Link from 'next/link'
import styles from '@/styles/pages/home.module.css'

type Props = Omit<ImageProps, 'src'> & {
  srcLight: string
  srcDark: string
}

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest} src={srcLight} className='imgLight' />
      <Image {...rest} src={srcDark} className='imgDark' />
    </>
  )
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight='turborepo-dark.svg'
          srcDark='turborepo-light.svg'
          alt='Turborepo logo'
          width={180}
          height={38}
          priority
        />

        <ol className={styles.list}>
          <li>
            <Link href='/web' className={styles.highlight}>
              查看 Web 项目文档 →
            </Link>
          </li>
          <li>
            <Link href='/mock' className={styles.highlight}>
              查看 Mock Server 文档 →
            </Link>
          </li>
          <li>Get started by editing apps/docs/app/page.tsx</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image className={styles.logo} src='/vercel.svg' alt='Vercel logomark' width={20} height={20} />
            Deploy now
          </a>
          <a
            href='https://turborepo.dev/docs?utm_source'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        <Button appName='docs' className={styles.secondary}>
          Open alert
        </Button>
      </main>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image aria-hidden src='/window.svg' alt='Window icon' width={16} height={16} />
          Examples
        </a>
        <a href='https://turborepo.dev?utm_source=create-turbo' target='_blank' rel='noopener noreferrer'>
          <Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
          Go to turborepo.dev →
        </a>
      </footer>
    </div>
  )
}
