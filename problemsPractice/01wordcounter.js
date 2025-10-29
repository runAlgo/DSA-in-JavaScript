const countWord = (text) => {
    const lower = text.toLowerCase();
    const words = lower.split(/\s+/)
    
    const wordMap = []
    for(const word of words) {
        if(word in wordMap) {
            wordMap[word]++;
        }else {
            wordMap[word] = 1;
        }
    }
    return wordMap;
}
console.log(countWord("Kalu is Here and I will give you the overview and teke you here"));
