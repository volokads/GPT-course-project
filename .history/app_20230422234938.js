const OPENAI_API_KEY = "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"
async function fetchData(){
 const res = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
        Autorization: `Bearer ${OPENAI_API_KEY}`,
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