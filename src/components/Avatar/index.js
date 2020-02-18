import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath:{eq: "image-profile.JPG"}) {
                    childImageSharp{
                        fixed(width: 60, height: 60){
                            ...GatsbyImageSharpFixed
                        }
                    } 
                }
            }
        `
    )

    return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar