    const token = this.adalService.userInfo.token.split('.')[1];
    const base64token = token.replace('-', '+').replace('_', '/');
    const decoded = JSON.parse(window.atob(base64token));
    const userid = decoded["oid"];
    const email = decoded["upn"];
