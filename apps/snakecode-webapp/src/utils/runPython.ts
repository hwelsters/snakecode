import { loadPyodide } from 'pyodide'

async function runPython(_: string) {
  loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/'
  }).then((pyodide: any) => {
    console.log(pyodide.runPython('print("Hello from Python!")'))
  })
}

export default runPython
