import * as FileTypes from './data';
import './styles.css';

// https://pqina.nl/blog/set-value-to-file-input/
// https://stackoverflow.com/questions/2856513/how-can-i-trigger-an-onchange-event-manually
function loadIntoFileInput(fileIdentifier, contentString, fileName, mime) {
  // Create a new File object
  const myFile = new File([contentString], fileName, {
    type: mime === 'txt' ? 'text/plain' : 'text/csv',
    lastModified: new Date()
  });

  // Now let's create a DataTransfer to get a FileList
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(myFile);

  const fileInput = document.querySelector(fileIdentifier);
  fileInput.files = dataTransfer.files;

  // fire the event
  if ('createEvent' in document) {
    let evt = document.createEvent('HTMLEvents');
    evt.initEvent('change', false, true);
    fileInput.dispatchEvent(evt);
  } else fileInput.fireEvent('onchange');
}

//https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
function downloadFile(filename, content, type) {
  const mime = type === 'txt' ? 'plain/text' : 'plain/csv';
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:${mime};charset=utf-8,` + encodeURIComponent(content)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default function TestFiles({ fileIdentifier }) {
  if (!fileIdentifier) return '';

  const files = Object.entries(FileTypes);

  return (
    <div className="test-files-wrapper">
      <section className="test-files">
        {files.map(([title, content], i) => {
          const [one, ...two] = title.split('_');
          return (
            <article key={i}>
              <p className="heading">{one}</p>
              <p className="subheading">{two.join('\u00A0')}</p>
              <div>
                <button
                  onClick={() =>
                    loadIntoFileInput(
                      fileIdentifier,
                      content,
                      `${title}.${one}`,
                      one
                    )
                  }
                >
                  load
                </button>
                <button
                  onClick={() => downloadFile(`${title}.${one}`, content, one)}
                >
                  download
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
