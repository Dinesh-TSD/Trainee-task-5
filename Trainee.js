const getMostFitTrainee = (oxygenLevels) => {
    const isValidInput = oxygenLevels.every(level => level >= 1 && level <= 100);
    if (!isValidInput) return "INVALID INPUT";

    const averages = Array.from({ length: 3 }, (_, i) => 
        Math.round(oxygenLevels.slice(i * 3, i * 3 + 3).reduce((sum, level) => sum + level, 0) / 3)
    );

    const maxAverage = Math.max(...averages);

    if (maxAverage < 70) return "All trainees are unfit.";

    const fitTrainees = averages
        .map((avg, index) => (avg === maxAverage ? index + 1 : null))
        .filter(Boolean);

    return `Trainee Number : ${fitTrainees.join('\nTrainee Number : ')}`;
};

//input
const oxygenLevels = [
    95, 92, 95, // Round 1
    92, 90, 92, // Round 2
    90, 92, 90  // Round 3
];

console.log(getMostFitTrainee(oxygenLevels));
