/* eslint-disable react/prop-types */
import ReactMarkdown from 'react-markdown'

const MarkdownViewer = ({ text }) => {

  return <ReactMarkdown>{text}</ReactMarkdown>

}

export default MarkdownViewer;