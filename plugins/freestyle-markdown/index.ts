import * as marked from 'marked'
import { MarkedOptions } from 'marked'

export default (src: string, options?: MarkedOptions, callback?: (error: Error, parseResult: string) => void) => {

    let result = marked(src, options, callback)

    return result
}

