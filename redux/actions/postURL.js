import axios from "axios"

export function importClick(pageType, userAgent, requestUri) {
  const url = "https://komodo-api-v3.herokuapp.com/api/clicks"
  return () => {
    axios.post(url,{
      pageType: pageType,
      userAgent: userAgent,
      campaignId: 25,
      requestUri: requestUri,
    })
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("Error")
        }
        if (response.data.result === "ERROR") {
          throw new Error(response.data.result)
        }
        return response
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
