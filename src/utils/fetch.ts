enum METHODS  {
    GET = 'GET',
    POST = 'POST',
    PUT= 'PUT',
    DELETE = 'DELETE',
}

type Options = {
    headers?: Record<string, string>;
    method?: METHODS;
    timeout?: number;
    data?: Record<string, any>;
  };

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>

function queryStringify(data: Record<string, any>) {
if (typeof data !== 'object') {
        throw new Error('Data must be object');
}

const keys = Object.keys(data);

return keys.reduce((result, key, index) => {
return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
}, '?');
}


class HTTPTransport {
        get: HTTPMethod = (url, options = {}) => (
                this.request(url, {...options, method: METHODS.GET}, options.timeout)
        )

        put: HTTPMethod = (url, options = {}) => (
                this.request(url, {...options, method: METHODS.PUT}, options.timeout)
        )

        post: HTTPMethod = (url, options = {}) => (
        this.request(url, {...options, method: METHODS.POST}, options.timeout)
        )
        
        delete: HTTPMethod = (url, options = {}) => (
        this.request(url, {...options, method: METHODS.DELETE}, options.timeout)
        )

    request = (url: string, options : Options = {}, timeout = 5000) => {
            const {headers = {}, method, data} = options;

            return new Promise(function(resolve, reject) {
                    if (!method) {
                            reject('No method');
                            return;
                    }

                const xhr = new XMLHttpRequest();
                const isGet = method === METHODS.GET;

                xhr.open(
                            method, 
                            isGet && !!data
                                    ? `${url}${queryStringify(data)}`
                                    : url,
                    );

                    Object.keys(headers).forEach(key => {
                            xhr.setRequestHeader(key, headers[key]);
                    });
            
                xhr.onload = function() {
                      resolve(xhr);
                };
            
                xhr.onabort = reject;
                xhr.onerror = reject;
            
                xhr.timeout = timeout;
                xhr.ontimeout = reject;
                    
                  if (isGet || !data) {
                        xhr.send();
                    } else {
                        xhr.send(JSON.stringify(data));
                    }
          });
    };
}
