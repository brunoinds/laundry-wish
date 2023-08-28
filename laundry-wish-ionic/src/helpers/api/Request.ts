
import { EnvironmentVariables } from "@/../conf/environment";

class RequestHelper{
    public static mountUrl(url: string, queryParams: any = {}): string{
        const mountedUrl = EnvironmentVariables.api.baseUrl + url
        const queryString = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
        return queryString ? mountedUrl + '?' + queryString : mountedUrl;
    }
}

interface IRequestOptions{
    queryParams?: any,
    body?: any,
    headers?: any,
}

class Request{
    public static get(url: string, options: IRequestOptions = {}): Promise<any>{
        return new Promise((resolve, reject) => {
            const mountedUrl = RequestHelper.mountUrl(url, options.queryParams)
            fetch(mountedUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...options.headers
                },
            }).then(response => {
                response.json().then(data => {
                    const responseData = {
                        status: response.status,
                        response: data,
                    }
                    resolve(responseData)
                })
            }).catch(error => {
                error.json().then((data:any) => {
                    const responseData = {
                        status: error.status,
                        response: data,
                    }
                    reject(responseData)
                })
            })
        });
    }
    public static post(url: string, options: IRequestOptions): Promise<any>{
        return new Promise((resolve, reject) => {
            const mountedUrl = RequestHelper.mountUrl(url, options.queryParams)
            fetch(mountedUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...options.headers
                },
                body: JSON.stringify(options.body)
            }).then(response => {
                response.json().then(data => {
                    const responseData = {
                        status: response.status,
                        response: data,
                    }
                    resolve(responseData)
                })
            }).catch(error => {
                error.json().then((data:any) => {
                    const responseData = {
                        status: error.status,
                        response: data,
                    }
                    reject(responseData)
                })
            })
        });
    }
    public static put(url: string, options: IRequestOptions): Promise<any>{
        return new Promise((resolve, reject) => {
            const mountedUrl = RequestHelper.mountUrl(url, options.queryParams)
            fetch(mountedUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...options.headers
                },
                body: JSON.stringify(options.body)
            }).then(response => {
                response.json().then(data => {
                    const responseData = {
                        status: response.status,
                        response: data,
                    }
                    resolve(responseData)
                })
            }).catch(error => {
                error.json().then((data:any) => {
                    const responseData = {
                        status: error.status,
                        response: data,
                    }
                    reject(responseData)
                })
            })
        });
    }
    public static delete(url: string, options: IRequestOptions): Promise<any>{
        return new Promise((resolve, reject) => {
            const mountedUrl = RequestHelper.mountUrl(url, options.queryParams)
            fetch(mountedUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...options.headers
                },
            }).then(response => {
                response.json().then(data => {
                    const responseData = {
                        status: response.status,
                        response: data,
                    }
                    resolve(responseData)
                })
            }).catch(error => {
                error.json().then((data:any) => {
                    const responseData = {
                        status: error.status,
                        response: data,
                    }
                    reject(responseData)
                })
            })
        });
    }
    public static patch(url: string, options:IRequestOptions): Promise<any>{
        return new Promise((resolve, reject) => {
            const mountedUrl = RequestHelper.mountUrl(url, options.queryParams)
            fetch(mountedUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...options.headers
                },
                body: JSON.stringify(options.body)
            }).then(response => {
                response.json().then(data => {
                    const responseData = {
                        status: response.status,
                        response: data,
                    }
                    resolve(responseData)
                })
            }).catch(error => {
                error.json().then((data:any) => {
                    const responseData = {
                        status: error.status,
                        response: data,
                    }
                    reject(responseData)
                })
            })
        });
    }
}


export { Request };