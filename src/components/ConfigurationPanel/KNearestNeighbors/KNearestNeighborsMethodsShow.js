//import {euclidean} from 'ml-distance-euclidean'
const euclidean = require('ml-distance-euclidean').euclidean
//const euclidean = MLDistanceEuclidean.euclidean

export default function (KNearestNeighbors) {
  KNearestNeighbors.methods.showModel = async function () {
    // console.log(this.model)
    if (!this.model) {
      await this.start()
      //console.error('no this.model')
      //return false
    }

    // --------------------------
    //console.log(this.dataToShow)
    let unknownSetRowIndex = this.dataToShow.testSetRowIndexes

    let neighbors = []
    let neighborsID = []
    let unknowns = []
    let unknownsID = []
    //console.log(unknownSetRowIndex)

    this.dataToShow.testSet.forEach((set, i) => {
      if (unknownSetRowIndex.indexOf(i) === -1) {
        neighbors.push(set)
        neighborsID.push(i)
      } else {
        unknowns.push(set)
        unknownsID.push(i)
      }
    })

    if (unknowns.length === 0) {
      unknowns = [].concat(neighbors)
      unknownsID = [].concat(neighborsID)
      unknownSetRowIndex = [].concat(neighborsID)
    }

    //console.log(neighbors)
    // console.log(unknowns)
    if (neighbors.length === 0) {
      neighbors = unknowns
      neighborsID = unknownsID
    }

    // --------------------------
    let distanceMatrix = unknowns.map(unknownFeature => {
      let maxDistance = null
      let distances = neighbors.map(neighbor => {
        let distance = euclidean(unknownFeature, neighbor)
        if (maxDistance === null || distance > maxDistance) {
          maxDistance = distance
        }

        return distance
      })

      distances = distances.map(d => {
        return ((maxDistance - d) / maxDistance)
      })

      return distances
    })

    // console.log(distanceMatrix)
    if (distanceMatrix.length === 0) {
      throw Error('Distance matrix is empty')
    }

    let colorMatrix = distanceMatrix.map(unknown => {
      return unknown.map(d => {
        return heatMapColorforValue(d)
      })
    })

    //console.log(colorMatrix)

    // --------------------------

    let tableHeaderUnknownColspan = 2
    if (this.model === 'unsupervised') {
      tableHeaderUnknownColspan = 1
    }

    // console.log({tableHeaderUnknownColspan, colorMatrix})

    let tableHeader = `<thead>
  <tr>
    <th rowspan="2" colspan="${tableHeaderUnknownColspan}" valign="bottom">${this.$t('Unknowns')}</th>
    <th colspan="${colorMatrix[0].length}">${this.$t('Neighbors')}</th>
  </tr>
  <tr>${colorMatrix[0].map((value, i) => `<th>${neighborsID[i] + 1}</th>`).join('')}</tr>
</thead>`

    let trainSetClassesDict = this.dataToShow.trainSetClassesDict
    let unknownsPrediction = this.unknownsPrediction
    // console.log({trainSetClassesDict, unknownsPrediction})
    if (unknownsPrediction.length === 0) {
      // let data = await this.$parent.getVectorData()
      // let predictVector = await this.getPredictResultsVector(this.model, data)
      // let predictResults = await this.getPredictResultsValue(data, predictVector)
      // console.log(predictVector)
      // console.log(data)
      unknownsPrediction = await this.$parent.getTrainSetPredictsResult()
      // throw Error('todo')
    }
    else {
      unknownsPrediction = unknownsPrediction.map(i => trainSetClassesDict[i])
    }

    let tableBody = `<tbody>
${colorMatrix.map((row, i) => {
      let thPrediection = `<th>${unknownsPrediction[i]}</th>`
      if (this.model === 'unsupervised') {
        thPrediection = ''
      }
      return `<tr>
  <th>${(unknownSetRowIndex[i]) + 1}</th>
  ${thPrediection}
  ${row.map((color, j) => {
        let d = distanceMatrix[i][j]
        let dText = d
        dText = Math.round(dText * 100) + '%'

        if (d > 0.7 || d < 0.3) {
          return `<td style="text-align:center;background-color: ${color}; color: white">${dText}</td>`
        } else {
          return `<td style="text-align:center;background-color: ${color}">${dText}</td>`
        }
      }).join('')}
</tr>`
    }).join('\n')}
</tbody>`

    // --------------------------

    // console.log(tableBody)

    let bodyHTML = `<table border="1" align="center">
    ${tableHeader}
    ${tableBody}
</table>`
    bodyHTML = `<div class="tree">${bodyHTML}</div>`
    //console.error('[TODO]')
    //console.log()
    let title = this.$t('KNN') + ` (` + (new Date()).mmddhhmm() + ')'

    // console.log('KNNModelShow' + this.config.modelBuildedTime)
    let modelWindow = this.utils.PopupUtils.open({
      windowName: 'KNNModelShow' + this.config.modelBuildedTime,
      cssURL: this.modelCSSURL,
      bodyHTML,
      size: 'right',
      //size: 'left',
      title
    })

    modelWindow.scrollToTop()
    modelWindow.scrollToCenter()
  }

  /**
   * https://stackoverflow.com/a/27263918/6645399
   */
  function heatMapColorforValue(value) {
    var h = (1.0 - value) * 240
    return "hsl(" + h + ", 100%, 50%)";
    //return `rgba(22, 160, 133, ${value})`
    // rgb(22, 160, 133)
  }
}
