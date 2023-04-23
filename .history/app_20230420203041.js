const API_KEY = "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"
async function fetchData(){
 const res = await fetch("https://api.openai.com/v1/completions", {
    method: 'POST',
    headers: {
        Autorization: `Bearer ${API_KEY}`,
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