export const getData = async () => {
  let data = []
    try {
      const arr = localStorage.getItem('data')
      data = JSON.parse(arr)
      if (data.length > 0) return data
      throw new Error('err')
    }
    catch (err) {
      const book = await fetch('./data.json')
      return data = await book.json()
    }
}
export const setData = async (data) => {
  localStorage.setItem('data', JSON.stringify(data));
}
