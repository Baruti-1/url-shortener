// google-chrome --disable-web-security --user-data-dir="[some directory here]"

import { useState } from 'react';
import Spinner from './Spinner';

const Shorten = () => {
  const [urls, setUrls] = useState([]);
  const [spinner, setSpinner] = useState(false);

  // Validate a URL
  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    return !!pattern.test(str);
  }

  let url = '';

  const formSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById('link-input');
    const errMsg = document.getElementById('err-msg');

    url = input.value;

    if (url.trim() === '') {
      errMsg.innerText = 'Please enter URL';
      input.classList.add('border-red');
    } else if (!validURL(url.trim())) {
      errMsg.innerText = 'Please enter a valid URL';
      input.classList.add('border-red');
    } else {
      errMsg.innerText = '';
      input.classList.remove('border-red');
      setSpinner(true);

      const KEY = import.meta.env.VITE_API;

      fetch('https://shrtlnk.dev/api/v2/link', {
        method: 'POST',
        headers: {
          'api-key': KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUrls([...urls, data]);
          setSpinner(false);
        });
      input.value = '';
    }
  };

  const copyUrl = () => {
    setCopy(!copy);
    navigator.clipboard.writeText(urls.shrtlnk);
  };

  return (
    <section id="shorten" className="relative bg-gray-100">
      {/* shorten container */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* form */}
        <form
          onSubmit={formSubmit}
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            id="link-input"
            type="text"
            className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
            placeholder="Shorten a link here"
          />
          <button
            className={`px-10 py-3 text-white ${
              spinner ? 'bg-cyanLight' : 'bg-cyan'
            } rounded-lg hover:bg-cyanLight focus:outline-none md:py-2`}
          >
            {spinner ? <Spinner /> : 'Shorten it!'}
          </button>
          {/* error message */}
          <div
            id="err-msg"
            className="absolute left-7 bottom-3 text-red text-sm italic"
          ></div>
        </form>

        {urls.map((url) => (
          <div
            key={url.key}
            className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
          >
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              {url.url}
            </p>
            <div
              key={url.key}
              className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
            >
              <div id="short-url" className="font-bold text-cyan">
                {url.shrtlnk}
              </div>
              <button
                id={url.key}
                className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus-outline-none"
                onClick={() => {
                  const btn = document.getElementById(`${url.key}`);
                  btn.classList.add('bg-darkViolet');
                  btn.innerText = 'Copied';

                  navigator.clipboard.writeText(url.shrtlnk);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shorten;
