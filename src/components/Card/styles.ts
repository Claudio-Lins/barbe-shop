import tw from "tailwind-styled-components"


export const Container = tw.div`
    bg-red-600
    flex
    flex-col
    justify-center
    items-center
    min-h-screen
    p-4

    h1 {
        font-bold
        text-white
    }
     
    h2 {
        font-bold
        text-white
    }
`
export const Form = tw.form`
    flex
    flex-col
    `
