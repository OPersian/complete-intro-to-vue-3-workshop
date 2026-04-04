let calculateAge = (minimumAgeYearsFromSource, sourcePostDate) => {
    let now = new Date()
    let yearsPassed = (now - new Date(sourcePostDate)) / (1000 * 60 * 60 * 24 * 365.25)
    return Math.ceil(minimumAgeYearsFromSource + yearsPassed)
};

let calculateFictionalNow = (fictionalDob, ageAtSourceDate, realWorldSourceDate) => {
    // Fictional date at the real-world source date = DOB + age at that time
    let fictionalRef = new Date(fictionalDob)
    fictionalRef.setFullYear(fictionalRef.getFullYear() + ageAtSourceDate)
    // Add real-world time elapsed since the source date
    let msElapsed = new Date() - new Date(realWorldSourceDate)
    let fictionalNow = new Date(fictionalRef.getTime() + msElapsed)
    return fictionalNow.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
