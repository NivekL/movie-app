/* Animation variants*/
export const titleVariant = {
    hidden: {
        y: 100, 
        opacity: 0
    },
    visible: {
        y: 0, 
        opacity: 1,

        transition: { 
            duration: 0.5
        }
    }
}

export const containerVariant = {
    hidden: {
        y: 100, 
        opacity: 0
    },
    visible: {
        y: 0, 
        opacity: 1,

        transition: {
            delay: 0.5, 
            duration: 0.3
        }
    }
}