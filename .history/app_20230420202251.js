const API_KEY = "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"
async function fetchData(){
 const res = await fetch("https://api/openai.com/v1/completisions", {
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
}