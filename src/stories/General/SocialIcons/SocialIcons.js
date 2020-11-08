import React from 'react'
import styled from 'styled-components'
import Facebook from '../../Logos/Facebook'
import Instagram from '../../Logos/Instagram'
import Twitter from '../../Logos/Twitter'
import Pinterest from '../../Logos/Pinterest'
import YouTube from '../../Logos/YouTube'

export default function SocialIcons({ links }) {
  const { facebook, instagram, twitter, pinterest, youtube } = { ...links }

  return (
    <Container>
      {facebook && (
        <Link href={facebook}>
          <Facebook />
        </Link>
      )}
      {instagram && (
        <Link href={instagram}>
          <Instagram />
        </Link>
      )}
      {twitter && (
        <Link href={twitter}>
          <Twitter />
        </Link>
      )}
      {pinterest && (
        <Link href={pinterest}>
          <Pinterest />
        </Link>
      )}
      {youtube && (
        <Link href={youtube}>
          <YouTube />
        </Link>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 2rem 1rem;
  max-width: 200px;
  svg {
    height: 1rem;
  }
`

const Link = styled.a``
