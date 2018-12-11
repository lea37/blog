import Typography from "typography"

const typography = new Typography({ 
    baseFontSize: "16px",
    baseLineHeight: 1.666,
    headerFontFamily: ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Domine', 'serif'],
    scaleRatio: 2,
})

// Output CSS as string.
typography.toString()

export default typography