const OPENAI_API_KEY = "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"
async function fetchData(){
 const res = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
        // Autorization: `Bearer ${OPENAI_API_KEY}`,
        Autorization: 'Bearer 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',
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "hello, how are you doing?",
        max_tokens: 7
    })
 })
 const data = await res.json()
 console.log(data)
}
fetchData()