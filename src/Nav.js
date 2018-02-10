import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import classnames from 'classnames';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav: "nav-text",
            hovered: "",
            hideSvg: false
        }
    }

    fadeIn(ref) {
        let time;

        switch(ref) {
            case "about":
                time = 4000;
                break;
            case "contact":
                time = 2000;
                break;
            default:
                time = 1750;
        }
        setTimeout(() => {
            this.setState({
                hovered: ref,
                hideSvg: true
            });
        }, time);
    }

    getClass(ref) {
        const { nav, hovered } = this.state;
        return classnames(nav, {
            "nav-text--show": ref === hovered
        });
    }

    reset() {
        this.setState({
            hovered: "",
            hideSvg: false
        });
    }

    render() {
        const { hideSvg } = this.state;

        const svgClass = classnames({"hide": hideSvg});

        return(
            <div className="nav">
                <Row className="nav__logo">
                    <Col xs={12}>
                        <svg width="400" height="60.5" xmlns="http://www.w3.org/2000/svg" display="block"><path d="M153.917.233l-1.375.619c-.482.216-.875.451-.875.521s-.109.127-.242.127c-.504 0-3.925 2.872-3.925 3.296 0 .068-.172.311-.382.539-.468.509-1.618 2.389-1.618 2.645 0 .262-.456.233-.617-.038-.321-.542-3.428-2.436-4.013-2.447-.158-.003-.432-.116-.61-.25-.178-.135-.553-.247-.834-.25-.28-.003-.655-.116-.833-.25-.196-.149-.696-.245-1.271-.245-.521 0-1.217-.113-1.546-.25-1.01-.422-2.139-.33-2.775.225-.8.699-.705 2.311.176 2.997.855.666 2.185 2.006 2.92 2.944.359.458.859 1.058 1.111 1.333.756.828.541.948-.874.485-.68-.222-.945-.233-1.615-.066-.441.11-1.338.248-1.993.308-2.544.23-3.14 2.205-1.102 3.649.291.206.565.375.609.375.292 0 2.51 1.73 3.487 2.721l1.177 1.193-.573.108c-.641.121-1.61.446-1.991.668-.137.08-.362.187-.5.238-2.51.933-5.833 4.256-5.833 5.833 0 .145-.112.375-.25.513-.153.153-.25.561-.25 1.052 0 .441-.112 1.017-.249 1.28-.372.713-.373 14.947-.001 15.836.137.329.25.95.25 1.38 0 .429.11.927.245 1.104.134.178.247.5.25.715.003.215.106.59.23.833.123.244.362.743.531 1.109.337.733 1.415 2.618 1.573 2.75.054.046.393.459.753.917.988 1.26 2.577 2.689 4.115 3.702.449.296.931.653 1.072.793.14.14.431.255.646.255.215 0 .604.105.863.234 1.568.776 1.479.766 7.019.761 4.384-.005 5.342-.047 5.61-.25.178-.135.456-.245.618-.245.162 0 .951-.337 1.752-.75.802-.412 1.543-.75 1.648-.75 1.084 0 6.575-6.902 6.575-8.265 0-.142.112-.371.25-.509.137-.137.25-.498.25-.801 0-.303.112-.644.25-.758.173-.144.25-.526.25-1.237 0-.602.087-1.117.208-1.238.346-.346.391-14.542.049-15.229-.141-.283-.257-.859-.258-1.28-.001-.422-.113-.981-.25-1.244-.137-.262-.249-.614-.249-.782 0-.167-.076-.351-.169-.409-.093-.057-.283-.343-.421-.634-.409-.86-.673-1.271-1.181-1.836-.634-.705-1.964-1.778-2.204-1.778-.106 0-.192-.068-.192-.15 0-.083-.206-.232-.458-.331a6.692 6.692 0 0 1-.708-.326c-.622-.362-1.287-.657-1.709-.757-.616-.147-.578-.254.327-.936.425-.321.857-.658.96-.75.285-.256.766-.533 1.588-.917.413-.192.963-.458 1.222-.591.26-.133.738-.242 1.064-.242 1.435 0 2.39-1.259 1.945-2.564-.244-.718-1.699-1.936-2.312-1.936-.116 0-.305-.113-.419-.25a.748.748 0 0 0-.5-.25c-.161 0-.386-.113-.5-.25-.114-.138-.367-.253-.562-.256-.195-.003-.542-.113-.771-.244-.229-.131-.773-.241-1.208-.244-.897-.007-1.063-.449-.543-1.445.137-.263.249-.614.25-.781.001-.167.113-.416.251-.554a.941.941 0 0 0 .25-.571c0-.177.07-.322.155-.322.086 0 .203-.148.26-.329.226-.711 1.486-2.362 2.998-3.93l1.587-1.645V0l-3.042.004c-2.189.003-3.182.067-3.541.229m-.902 4.978c-.089.233-.241.472-.338.533-.097.06-.177.245-.177.412a.764.764 0 0 1-.25.511.784.784 0 0 0-.25.532.95.95 0 0 1-.25.575c-.138.137-.25.498-.25.801 0 .303-.113.644-.25.758-.17.142-.25.52-.25 1.187 0 .972-.004.98-.486.98-.268 0-.737.123-1.042.274-.306.151-.762.372-1.014.492l-.458.218v-.728c0-.401.125-.979.278-1.284.153-.306.327-.668.387-.805.438-1.003 1.695-2.729 2.61-3.583 1.498-1.398 2.044-1.672 1.74-.873m-12.497 4.081c1.657.886 3.982 3.249 3.982 4.047 0 .074.104.346.232.606.543 1.108.672 1.745.728 3.597.051 1.687.024 1.958-.2 1.958-.143 0-.26-.136-.26-.301 0-.166-.11-.448-.245-.625-.134-.178-.247-.553-.25-.834-.003-.28-.115-.655-.25-.833-.134-.178-.247-.462-.25-.631-.003-.169-.111-.507-.241-.75-.129-.244-.476-.93-.769-1.526-.294-.596-.638-1.202-.765-1.346-.126-.145-.23-.34-.23-.433 0-.094-.159-.35-.353-.57a10.086 10.086 0 0 1-.77-1.068 9.1 9.1 0 0 0-.845-1.125c-.49-.525-.304-.589.486-.166M10.606 10.751a2.6 2.6 0 0 1-1.01.249c-.293 0-.678.11-.856.245-.178.134-.462.247-.631.25-.269.004-.621.155-1.609.687-.138.074-.567.295-.955.49-.876.441-3.356 2.897-3.799 3.763-.181.354-.423.743-.538.866-.114.123-.211.386-.214.586-.003.2-.113.551-.244.78-.343.599-.347 4.308-.005 4.759.134.178.247.487.25.687.003.2.099.463.213.586.115.123.354.507.532.854.34.667 2.275 2.593 2.985 2.973.23.123 1.005.515 1.722.87.717.355 1.502.749 1.745.875.244.126.619.231.834.234.215.003.536.116.714.25.178.135.553.248.834.251.28.003.697.113.926.244.229.131.764.241 1.189.244.425.003.988.118 1.25.255.263.137.819.249 1.236.25.417.001.845.087.95.193.106.105.514.247.909.315.394.068.978.218 1.299.332 1.461.521 1.947.713 2.359.929.244.128.562.232.709.232.146 0 .266.068.266.15 0 .083.206.224.458.313.698.248 2.49 1.975 2.816 2.714.16.361.35.656.424.656.252 0 .144 2.891-.12 3.241-.135.177-.246.44-.248.583-.001.143-.207.495-.458.782-.251.287-.609.7-.797.917a7.091 7.091 0 0 1-.889.811c-.302.229-.639.491-.75.583-.341.282-1.285.75-1.513.75-.119 0-.309.112-.423.25-.114.137-.405.252-.646.255a1.51 1.51 0 0 0-.761.25c-.187.141-.685.245-1.177.245s-.99.104-1.176.245c-.44.333-2.994.336-3.574.005-.229-.131-.791-.243-1.25-.249-.458-.007-.979-.122-1.157-.256-.177-.135-.456-.245-.619-.245-.292 0-1.142-.328-1.999-.771-.244-.126-.53-.229-.637-.229-.107 0-.307-.113-.445-.25a.935.935 0 0 0-.571-.25c-.177 0-.322-.07-.322-.155 0-.086-.168-.208-.375-.273-.206-.064-.648-.331-.982-.594-.334-.263-.672-.478-.752-.478-.079 0-.331-.171-.559-.38C1.993 41.545.93 41.269.224 41.855c-.429.356-.305 3.386.151 3.69.206.137.555.409.776.602.22.194.495.353.611.353.115 0 .235.056.266.125.098.221 1.117.875 1.364.875.131 0 .282.112.335.25.053.137.239.25.414.25s.412.112.526.25c.114.137.339.25.5.25.161 0 .386.112.5.25.114.137.329.252.478.255.15.003.417.116.595.25.178.135.483.245.677.245.194 0 .498.11.676.245.178.134.586.249.907.255.321.006.729.121.907.255.21.159.716.245 1.439.245.666 0 1.309.1 1.593.249.632.33 2.716.33 3.503.001.329-.138 1.058-.253 1.62-.256.569-.003 1.206-.111 1.438-.244.229-.131.609-.241.843-.244.235-.003.572-.116.75-.251.178-.134.483-.247.678-.25.195-.003.448-.118.562-.255a.748.748 0 0 1 .5-.25c.161 0 .386-.113.5-.25.114-.138.3-.25.412-.25.112 0 .358-.131.547-.292.189-.16.511-.404.716-.541.877-.589 1.81-1.472 2.34-2.215.313-.438.7-.956.86-1.15.161-.194.292-.459.292-.589 0-.13.112-.349.25-.487.137-.137.253-.413.256-.613.003-.2.113-.55.244-.78.342-.599.342-4.237-.001-4.894-.137-.262-.249-.609-.249-.771a.752.752 0 0 0-.25-.501c-.137-.114-.25-.337-.25-.495 0-.158-.15-.423-.333-.589-.184-.166-.334-.391-.334-.5 0-.213-1.67-1.834-2.318-2.25a4.913 4.913 0 0 1-.606-.457 2.465 2.465 0 0 0-.605-.375 8.145 8.145 0 0 1-.679-.334l-.583-.335a4.91 4.91 0 0 0-.542-.263 7.9 7.9 0 0 1-.692-.332c-.244-.13-.619-.239-.834-.242a1.43 1.43 0 0 1-.714-.25A1.468 1.468 0 0 0 19.5 29c-.24 0-.582-.11-.76-.245-.178-.134-.661-.249-1.073-.255-.413-.006-.896-.121-1.074-.255-.196-.149-.696-.245-1.271-.245-.639 0-1.015-.081-1.155-.25-.131-.157-.498-.25-.987-.25-.429 0-.864-.084-.967-.187-.102-.102-.473-.245-.825-.317-1.001-.204-3.495-1.231-4.137-1.703-1.329-.977-1.911-1.525-2.145-2.018-.155-.327-.355-.639-.444-.694-.385-.239-.17-2.793.303-3.603C5.664 17.782 7.449 16 7.949 16c.083 0 .239-.088.346-.195.224-.224 1.158-.588 2.122-.826.366-.091.738-.235.825-.322.269-.267 5.771-.186 6.258.093.229.131.579.241.778.244.199.003.574.113.833.244.26.131.997.487 1.639.792.642.304 1.459.76 1.817 1.012.357.252.751.458.875.458.123 0 .225.067.225.15 0 .781 2.64 1.097 3.366.402.472-.453.687-2.129.339-2.654-.191-.289-2.586-1.898-2.825-1.898-.117 0-.214-.068-.214-.15 0-.083-.206-.232-.458-.331-.252-.1-.59-.257-.75-.35-.762-.442-.892-.511-1.125-.6a7.9 7.9 0 0 1-.692-.332c-.244-.13-.581-.239-.75-.242-.17-.003-.454-.116-.632-.25-.177-.135-.59-.247-.916-.25-.326-.003-.739-.116-.917-.25-.476-.36-6.795-.355-7.487.006m165.935.387c-.115.073-.396.386-.625.696l-.416.564v37.057l.458.503c.878.965 1.53 1.075 5.805.983 4.522-.097 4.371-.087 4.494-.285.053-.086.752-.156 1.554-.156 1.025 0 1.555-.073 1.782-.245.178-.134.553-.247.833-.25.281-.003.656-.115.834-.25.178-.134.469-.247.647-.25.373-.006 2.815-1.157 2.899-1.366.03-.076.155-.139.277-.139 1.078 0 6.917-5.849 6.917-6.93 0-.13.074-.237.163-.237.09 0 .21-.184.267-.409.056-.226.208-.498.336-.604a.761.761 0 0 0 .234-.519c0-.179.112-.437.25-.575.137-.137.252-.413.255-.613.003-.2.116-.509.25-.687.135-.177.247-.59.25-.916.003-.326.116-.739.25-.917.166-.218.245-.735.245-1.592 0-.697.075-1.342.166-1.433.321-.321.384-2.103.103-2.901-.145-.413-.268-1.275-.272-1.917-.005-.691-.106-1.336-.247-1.583a2.26 2.26 0 0 1-.244-.927c-.003-.28-.116-.655-.251-.833-.134-.178-.247-.453-.25-.61-.004-.252-.35-1.061-.861-2.018-.089-.167-.313-.593-.497-.947-.185-.353-.443-.732-.575-.841-.131-.109-.239-.283-.24-.386-.002-.566-3.83-4.41-5.249-5.271-.366-.223-.765-.501-.887-.619-.121-.118-.318-.215-.437-.215-.12 0-.312-.113-.426-.25a.748.748 0 0 0-.5-.25c-.161 0-.386-.113-.5-.25-.114-.138-.367-.252-.562-.255-.195-.003-.5-.116-.678-.25a1.481 1.481 0 0 0-.75-.25 1.494 1.494 0 0 1-.75-.25c-.178-.135-.6-.245-.939-.245-.339 0-.831-.112-1.093-.249-.528-.275-11.601-.379-12.02-.113m184.376 2.62c-1.585.81-2.052 3.628-.789 4.756.771.688 2.206.707 2.905.038.471-.452.726-3.568.339-4.155-.432-.656-1.751-.999-2.455-.639m19.376.183c-.34.242-.667.598-.726.791a2.07 2.07 0 0 1-.358.638c-.582.663.205 3.252 1.09 3.587.156.059.383.206.505.325.841.832 4.196-.316 4.196-1.436 0-.162.117-.53.26-.817 1.12-2.244-2.761-4.658-4.967-3.088m9.055-.011c-2.367 1.992-1.145 5.57 1.902 5.57 3.062 0 4.35-3.788 1.903-5.594-.834-.615-3.062-.601-3.805.024m-235.79.82c.329.137.825.25 1.103.25.338 0 .506.083.506.25 0 .137-.106.25-.236.25-.612 0-3.515 2.449-4.455 3.759-.415.577-.637.741-1.004.741H149v-1.827c0-1.868-.007-1.845.722-2.423.443-.352 1.32-.75 1.667-.758.198-.004.586-.11.861-.236.649-.297.612-.297 1.308-.006m32.995.451c.2.111.776.251 1.28.312.875.105 1.417.263 2.625.763 1.173.485 1.822.81 2.509 1.257.394.257.791.467.881.467.26 0 3.707 3.536 3.985 4.088.138.272.446.795.685 1.162.24.367.485.873.545 1.125.061.252.184.458.274.458.089 0 .163.173.163.385 0 .212.11.531.245.708.134.178.247.6.25.937.003.337.117.726.255.863.362.362.357 5.868-.005 6.348-.135.177-.245.6-.245.937 0 .343-.111.707-.25.822a.791.791 0 0 0-.25.537c0 .289-.205.774-.689 1.63a81.15 81.15 0 0 0-.491.898c-.193.357-.5.807-.683 1a4.28 4.28 0 0 0-.554.775c-.23.439-2.328 2.494-2.546 2.494-.068 0-.315.168-.548.375a6.831 6.831 0 0 1-.999.693c-1.496.831-2.408 1.265-2.655 1.265-.149 0-.417.11-.595.245-.178.134-.59.247-.916.25-.327.003-.739.115-.917.25-.263.198-1.056.245-4.199.25l-3.875.005V15h3.178c2.17 0 3.293.064 3.542.201m-46.196 2.32c.416.328.63.648.683 1.02.042.298.125.655.185.792.072.167-.03.315-.308.443-.361.167-.417.153-.417-.105a.757.757 0 0 0-.25-.504c-.138-.114-.25-.303-.25-.42 0-.187-.486-.789-1.792-2.218-.206-.226-.375-.432-.375-.457 0-.116 1.98 1.021 2.524 1.449m-95.45 5.224c-.178.134-.537.247-.798.25a2.443 2.443 0 0 0-.917.234c-.243.126-.804.408-1.247.625-.442.218-1.005.502-1.25.633-.695.369-3.449 3.147-3.876 3.91-.211.378-.482.785-.601.907a.882.882 0 0 0-.218.541c0 .177-.074.322-.163.322-.09 0-.214.201-.276.447a4.82 4.82 0 0 1-.336.875 2.457 2.457 0 0 0-.229.928c-.004.275-.117.645-.251.823-.35.462-.345 6.147.005 6.76.131.229.241.655.244.946.003.292.118.643.256.78.137.138.25.356.25.486s.186.566.414.97c.228.404.495.921.594 1.148.099.227.231.452.295.5.063.048.328.401.588.785.471.695 1.879 2.074 2.604 2.552.208.137.477.343.596.457.12.115.392.283.605.375.213.092.519.242.679.334l.583.335c.161.092.367.193.459.224.091.032.429.155.75.275 1.725.642 7.396.67 8.026.04.114-.114.377-.207.585-.207.43 0 1.549-.532 2.336-1.11.292-.215.593-.39.669-.39.077 0 .532-.343 1.012-.763l.872-.763v.857c0 1.372.441 2.499 1.025 2.616.265.053.522.161.571.241.128.206.841.18 1.281-.047.205-.106.478-.241.607-.3.855-.392.849-.295.849-13.735 0-14.746.098-14.106-2.167-14.106-1.422 0-2.166.959-2.166 2.789v.94l-.459-.437c-.618-.589-2.407-1.791-2.666-1.792-.115 0-.209-.074-.209-.163 0-.09-.206-.214-.458-.275a2.888 2.888 0 0 1-.787-.337c-.181-.124-.556-.228-.833-.231a2.254 2.254 0 0 1-.922-.244c-.608-.348-5.467-.352-5.926-.005m27.051.232l-.458.467v13.158c0 14.164-.016 13.898.833 13.898.173 0 .36.075.417.167.326.528 1.885-.057 2.408-.903.333-.539.342-.777.347-9.034.005-7.192.043-8.529.25-8.804.135-.177.245-.496.245-.708 0-.212.069-.385.153-.385.084 0 .215-.182.291-.404.18-.522 2.143-2.584 2.597-2.727.068-.021.443-.179.833-.349 1.39-.609 1.89-.745 2.995-.812.836-.051 1.215-.001 1.496.196.207.144.541.263.742.263.325 0 1.141.355 1.633.711 1.305.942 1.787 1.379 2.109 1.909.211.346.425.668.476.713.203.185.675 1.212.676 1.472.001.153.113.493.25.756.211.404.25 1.743.255 8.75.006 9.102-.058 8.53 1.03 9.231.827.533 2.64.066 2.855-.734.057-.215.108-3.991.112-8.391.006-6.768.045-8.05.252-8.324.135-.178.245-.557.245-.843 0-.286.11-.665.245-.843.134-.178.248-.436.252-.574.008-.23.216-.502 1.473-1.921.794-.897 2.449-1.912 3.117-1.912.192 0 .495-.11.673-.245.441-.334 2.539-.334 2.98 0 .178.135.525.245.771.245.247 0 .542.113.656.25a.77.77 0 0 0 .517.25c.97 0 3.814 3.798 3.817 5.097.001.267.113.701.25.964.211.403.249 1.689.249 8.338 0 8.422.017 8.601.833 8.601.173 0 .36.075.417.167.31.501 1.906-.091 2.4-.89.461-.746.558-16.772.105-17.37-.134-.178-.247-.65-.25-1.048-.003-.398-.104-.923-.225-1.167l-.843-1.694c-1.176-2.366-5.012-5.478-6.784-5.504-.221-.003-.59-.113-.82-.244-.462-.264-5-.365-5-.111 0 .076-.093.148-.208.16-.646.065-1.677.353-1.838.514a.77.77 0 0 1-.475.187.874.874 0 0 0-.511.208c-.123.115-.521.359-.884.542-.364.183-1.289.958-2.056 1.722l-1.394 1.389-.272-.389c-.532-.76-1.366-1.596-2.067-2.072-.391-.265-.75-.534-.798-.597-.048-.064-.273-.195-.5-.292a7.825 7.825 0 0 1-.663-.32c-.858-.492-1.352-.691-1.715-.691-.228 0-.629-.112-.891-.249-.677-.353-4.689-.358-5.154-.006-.178.134-.561.247-.852.25-.29.003-.74.114-1 .246a9.275 9.275 0 0 1-.722.336c-.137.051-.45.224-.694.383-.244.16-.713.456-1.041.659l-.598.37v-.433c0-1.696-2.385-2.759-3.542-1.579m151.782-.232c-.178.134-.537.247-.798.25-.26.003-.673.108-.916.234-.244.126-.805.408-1.249.625-1.764.867-3.009 1.872-4.206 3.396-.36.458-.696.871-.746.917-.409.371-1.825 3.154-1.825 3.585 0 .116-.112.425-.249.687-.137.263-.25.853-.252 1.311a6.892 6.892 0 0 1-.26 1.667c-.267.863-.203 2.483.106 2.674.085.052.155.611.155 1.24 0 .796.076 1.221.25 1.395.137.138.25.475.25.75s.112.613.25.75c.137.138.25.328.25.424 0 .191.673 1.551.833 1.683.056.046.283.384.504.75.855 1.414 3.528 3.736 4.996 4.34.138.057.449.21.693.34.243.13.581.239.75.242.169.003.453.116.631.25.214.162.724.245 1.508.245.652 0 1.268.083 1.369.184.116.116.512.146 1.075.08.49-.057 1.454-.165 2.141-.242 1.46-.162 2.441-.503 4.167-1.448.7-.384 1.719-1.123 2.515-1.824.596-.525 2.096-2.397 2.43-3.032.107-.205.308-.581.445-.837.599-1.112.943-2.022.943-2.497 0-.28.112-.603.25-.717.366-.304.365-6.526-.001-7.228-.137-.262-.249-.642-.249-.843 0-.201-.11-.511-.245-.689-.134-.178-.247-.483-.25-.678-.003-.195-.118-.448-.255-.562-.138-.114-.25-.306-.25-.426 0-.119-.094-.317-.208-.44-.115-.123-.347-.494-.516-.826-.243-.476-1.948-2.304-3.332-3.572-.216-.197-.669-.449-1.889-1.049a77.414 77.414 0 0 1-1.247-.625 2.443 2.443 0 0 0-.917-.234c-.261-.003-.62-.116-.798-.25-.252-.191-.896-.245-2.926-.245-2.031 0-2.674.054-2.927.245m25.708.222l-.448.468v13.162c0 14.169-.016 13.903.833 13.903.173 0 .36.075.417.167.155.251.93.185 1.567-.133 1.201-.602 1.182-.448 1.188-9.865.005-7.139.043-8.468.25-8.743.135-.177.245-.496.245-.708 0-.212.068-.385.15-.385.083 0 .226-.206.318-.458.388-1.066 3.277-3.365 4.249-3.381.202-.003.554-.113.783-.244.562-.321 2.48-.318 2.907.005.178.135.49.245.695.245.329 0 1.143.353 1.638.711 1.305.942 1.787 1.379 2.109 1.909.211.346.425.668.476.713.203.185.675 1.212.676 1.472.001.153.113.493.25.756.211.404.25 1.743.255 8.75.006 9.079-.044 8.624 1.001 9.199.925.508 2.545.148 2.841-.633.084-.219.152-3.98.152-8.369 0-6.746.038-8.043.249-8.447.137-.263.249-.67.25-.904.001-.235.111-.572.246-.75.134-.178.247-.427.25-.552.022-.976 3.425-3.842 4.582-3.86.187-.003.485-.116.663-.25.44-.333 2.556-.326 3 .01.178.135.53.245.782.245s.5.067.551.149c.05.083.411.314.801.514 1.573.807 3.618 3.632 3.632 5.017.003.313.113.758.244.987.197.344.239 1.786.244 8.349.006 8.576-.003 8.484.884 8.484.148 0 .315.075.372.167.31.501 1.906-.091 2.4-.89.464-.751.554-16.466.099-17.338-.137-.262-.249-.801-.249-1.196 0-.417-.105-.824-.25-.969-.138-.138-.253-.387-.257-.554-.004-.167-.192-.603-.417-.97a9.88 9.88 0 0 1-.58-1.083c-.596-1.458-4.949-4.65-6.371-4.673-.206-.003-.562-.113-.792-.244-.462-.264-5-.365-5-.111 0 .076-.093.148-.208.16-.646.065-1.677.353-1.838.514a.77.77 0 0 1-.475.187.874.874 0 0 0-.511.208c-.123.115-.522.358-.887.541-.365.182-1.289.958-2.054 1.724l-1.39 1.392-.262-.391c-.402-.601-2.194-2.28-2.554-2.395-.176-.056-.321-.164-.321-.241 0-.076-.206-.22-.458-.319a6.692 6.692 0 0 1-.708-.326c-.829-.482-1.351-.693-1.715-.693-.228 0-.629-.112-.891-.249-.661-.345-4.625-.345-5.228-.001a2.288 2.288 0 0 1-.916.249c-.275.007-.646.122-.824.256-.178.135-.44.249-.583.253-.143.005-.748.334-1.343.732l-1.084.724-.094-.538c-.307-1.75-2.426-2.623-3.541-1.459m60.459-.222c-.178.134-.596.247-.928.25-.333.003-.698.118-.812.255a.804.804 0 0 1-.544.25c-.185 0-.702.225-1.149.5-.447.275-.867.502-.935.504-.067.002-.403.246-.746.542-.343.295-.89.759-1.216 1.031-.627.522-2.577 3.007-2.577 3.284 0 .089-.113.275-.25.413-.138.137-.25.385-.25.551a.762.762 0 0 1-.25.508c-.138.114-.252.405-.255.646a1.51 1.51 0 0 1-.25.761c-.135.178-.245.676-.245 1.106 0 .43-.112.997-.249 1.26-.336.643-.336 3.474-.001 4.061.131.229.241.754.245 1.166.004.413.119.965.256 1.228.137.262.249.562.249.666 0 .104.245.677.545 1.273 1.751 3.482 4.379 5.803 8.122 7.17 1.74.636 7.567.663 8.191.038.115-.114.404-.208.643-.208.24 0 .581-.11.759-.245.178-.134.457-.247.62-.25.164-.003.34-.118.393-.255.053-.138.228-.25.389-.25s.547-.224.857-.497c.31-.274.618-.499.684-.5.232-.005 1.937-1.697 2.406-2.388.261-.384.568-.797.683-.919.226-.239.29-2.477.08-2.803-.891-1.384-2.892-.898-4.02.977-.421.699-1.743 1.926-2.31 2.144-.207.08-.375.221-.375.315s-.136.171-.302.171c-.166 0-.447.11-.625.245-.178.134-.478.247-.666.25-.189.003-.489.115-.667.25-.466.352-4.537.361-5 .01-.178-.134-.443-.247-.589-.25-.146-.003-.596-.191-1-.419a17.47 17.47 0 0 0-1.091-.572c-.748-.332-2.651-2.485-3.208-3.63a366.2 366.2 0 0 0-.786-1.606c-.128-.259-.233-.766-.233-1.125V38h10.662c13.244 0 12.331.21 12.335-2.843.002-1.293-.062-1.846-.242-2.083-.134-.178-.247-.551-.25-.829-.003-.277-.106-.652-.23-.833a2.888 2.888 0 0 1-.337-.787c-.061-.252-.185-.458-.275-.458-.089 0-.163-.139-.163-.308 0-.169-.15-.481-.333-.692-.184-.212-.334-.477-.334-.589 0-.648-4.356-4.578-5.074-4.578-.12 0-.312-.113-.426-.25-.114-.137-.334-.25-.488-.25-.155 0-.427-.11-.605-.245-.178-.134-.548-.249-.823-.256a2.293 2.293 0 0 1-.917-.249c-.61-.348-5.634-.353-6.093-.005m30.116.012c-.309.133-.726.243-.927.243-.201 0-.511.11-.689.245-.178.134-.45.247-.603.25a.869.869 0 0 0-.508.233 1.754 1.754 0 0 1-.598.345c-.451.143-2.531 2.193-2.531 2.494 0 .118-.15.388-.334.6a1.623 1.623 0 0 0-.338.9c-.003.284-.116.662-.25.84-.154.202-.245.704-.245 1.343s.091 1.141.245 1.343c.134.178.247.522.25.765.006.494 1.231 2.23 1.932 2.738.244.176.542.414.662.528a2.5 2.5 0 0 0 .607.375c.213.092.5.231.637.31.844.484 1.349.692 1.693.696.215.003.536.116.714.25.178.135.666.247 1.084.25.417.003.905.116 1.083.25.178.135.665.248 1.083.251.418.003.948.113 1.177.244.229.131.62.241.869.244.417.006 1.36.338 1.964.693.137.081.418.22.624.309.546.236 1.876 1.506 1.876 1.791 0 .135.117.444.26.687.598 1.018-1.856 4.026-3.284 4.026-.135 0-.391.11-.569.245-.246.186-.843.244-2.49.244-1.647 0-2.245-.058-2.491-.244-.177-.135-.456-.245-.619-.245-.285 0-1.289-.382-1.807-.688a6.112 6.112 0 0 0-.5-.259c-.138-.062-.55-.303-.917-.537-2.281-1.456-2.611-1.547-3.698-1.022-.78.377-.886.574-.883 1.645.004 1.172.134 1.462.89 1.974.38.258.729.509.775.557.086.091.832.589 1.416.946.322.197.516.292.959.466.114.046.32.15.458.233.137.083.55.261.917.394.366.134.929.343 1.25.464.32.121 1.183.247 1.916.279.734.032 1.494.139 1.69.238.207.104.697.136 1.167.074.445-.057 1.35-.159 2.01-.226.66-.067 1.294-.215 1.408-.33a.824.824 0 0 1 .504-.208c.729 0 3.05-1.493 4.138-2.662.728-.781 1.172-1.527 1.747-2.935.493-1.207.032-5.236-.6-5.236-.081 0-.147-.138-.147-.305 0-1.322-4.173-3.914-7-4.349-.413-.064-.914-.205-1.114-.314-.2-.11-.8-.201-1.333-.204-.587-.004-1.097-.102-1.293-.25-.178-.135-.528-.245-.778-.245s-.667-.103-.927-.23c-.259-.126-.77-.37-1.134-.541-2.454-1.156-2.562-4.206-.186-5.243.192-.083.461-.217.598-.297 1.115-.645 5.061-.968 5.493-.448.118.142.344.259.502.259.157 0 .617.188 1.021.418.404.23.866.464 1.026.52.16.055.292.16.292.232 0 .072.206.216.458.321.252.104.721.333 1.042.508.637.348 1.42.431 1.583.168.057-.092.237-.167.401-.167 1.482 0 1.084-3.548-.443-3.94-.206-.053-.375-.157-.375-.231 0-.075-.581-.414-1.291-.753a90.835 90.835 0 0 1-1.734-.847c-.244-.126-.623-.229-.844-.229-.22 0-.546-.11-.724-.245-.463-.35-5.41-.349-6.217.002m19.99.256l-.513.513V56.003l-.444.498c-.299.335-.602.499-.924.499-1.38 0-2.617 2.067-1.873 3.13.248.353.37.37 2.634.37h2.373l.689-.662a6.669 6.669 0 0 0 1.117-1.514l.428-.851V23.526l-.513-.513c-.755-.756-2.219-.756-2.974 0m23.894-.268c-.178.134-.596.247-.928.25-.333.003-.698.118-.812.255-.114.137-.382.25-.594.25-.213 0-.429.069-.481.152-.052.084-.434.317-.849.518s-.846.451-.957.556c-.112.105-.542.463-.955.795-.77.618-2.522 2.621-2.914 3.333-.121.218-.382.733-.581 1.146a38.82 38.82 0 0 1-.599 1.192c-.13.244-.237.643-.237.887 0 .245-.113.557-.25.695-.365.365-.37 7.17-.005 7.652.134.178.247.5.25.715.005.373.355 1.321.687 1.859.084.137.244.438.355.667.343.712 1.58 2.439 2.171 3.03.842.842 2.051 1.803 2.267 1.803.106 0 .192.069.192.153 0 .153 1.883 1.104 3 1.516 1.682.62 7.423.641 8.035.029a.792.792 0 0 1 .488-.198c.754 0 3.491-1.684 4.724-2.906.953-.947 2.586-3.185 2.586-3.547 0-.117.074-.214.163-.214.09 0 .214-.201.276-.447a4.82 4.82 0 0 1 .336-.875c.122-.235.223-.55.224-.7.001-.15.113-.488.25-.75.361-.693.367-7.344.006-7.821a1.448 1.448 0 0 1-.25-.726c-.004-.351-.597-1.676-1.451-3.248-.95-1.747-5.017-5.266-6.086-5.266-.131 0-.383-.11-.561-.245-.178-.134-.553-.247-.833-.25-.281-.003-.656-.115-.834-.25-.47-.355-5.365-.364-5.833-.01m-235.74.466c0 .116-.469.519-1.042.896-1.08.71-1.317.725-1.925.117-.123-.123-.331-.224-.462-.224s-.238-.07-.238-.155c0-.086-.143-.201-.318-.257-1.138-.361-.467-.588 1.74-.588 1.698 0 2.245.051 2.245.211m-7.69 2.247c1.201.802 2.184 1.496 2.184 1.542.002.38-5.907 3.98-6.158 3.753-.154-.139-.361-.253-.461-.253-.099 0-.206-.056-.236-.125-.082-.183-1.098-.875-1.285-.875-.088 0-.185-.056-.215-.125-.066-.148-1.082-.875-1.223-.875-.053 0-.188-.078-.298-.172a8.691 8.691 0 0 0-.535-.405c-.541-.376.146-1.429 1.458-2.234.344-.21.625-.452.625-.536 0-.084.12-.153.266-.153.254 0 .528-.117 1.651-.707 1.167-.613 1.844-.427 4.227 1.165m13.893-.648c2.506 1.277 4.358 3.737 3.359 4.46a8.023 8.023 0 0 0-.652.522c-.121.114-.289.208-.373.208-.135 0-.38.176-1.155.83-.289.244-.349.225-1.049-.33-.347-.275-.685-.5-.75-.5-.065 0-.403-.225-.75-.5s-.685-.5-.75-.5c-.065 0-.403-.225-.75-.5s-.696-.501-.774-.503c-.078-.001-.397-.227-.708-.501l-.566-.499.399-.329c.219-.18.49-.405.6-.498.111-.094.268-.17.35-.17.13 0 .317-.135 1.128-.81.099-.082.343-.201.542-.264s.362-.185.362-.271c0-.262.896-.172 1.537.155M49.74 26.755c.178.135.485.245.682.245.198 0 .689.186 1.093.414.404.228.896.485 1.092.572.463.206 2.56 2.166 2.56 2.392 0 .096.176.406.392.69.216.283.446.684.512.89.065.207.188.375.274.375.085 0 .155.169.156.375.001.207.118.6.261.874.38.729.381 5.425.001 6.004-.144.221-.263.516-.263.655 0 1.543-4.121 5.759-5.63 5.759a.791.791 0 0 0-.537.25c-.312.377-4.083.355-4.952-.028-2.336-1.03-3.562-1.846-4.342-2.889a47.763 47.763 0 0 0-.773-1.012c-.297-.367-.766-1.332-.766-1.576 0-.112-.113-.298-.25-.412-.138-.114-.253-.442-.256-.728a2.286 2.286 0 0 0-.244-.938c-.336-.588-.337-3.462-.001-4.106.137-.263.249-.654.25-.869.001-.215.108-.59.238-.833.131-.243.408-.817.616-1.276.813-1.788 3.91-4.294 5.77-4.667.297-.06.583-.178.635-.262.163-.263 3.114-.177 3.482.101m179.093.068c1.96.739 3.074 1.42 4.105 2.51 1.067 1.13 1.425 1.588 1.592 2.042.093.252.237.458.32.458.082 0 .15.145.15.322 0 .177.112.434.25.571.137.138.253.462.256.72.003.259.113.658.244.887.34.596.336 4.122-.005 4.574a1.382 1.382 0 0 0-.245.71c0 .213-.069.518-.153.677-.085.159-.311.612-.503 1.007-.191.395-.424.807-.516.917-.092.109-.389.514-.66.9s-.889 1.005-1.372 1.376c-.484.372-.97.75-1.081.841a.806.806 0 0 1-.438.165c-.13 0-.33.112-.444.25-.114.137-.371.25-.572.25-.2 0-.51.11-.687.245-.446.337-4.173.356-4.852.025-2.419-1.181-2.828-1.44-3.746-2.365-.552-.556-1.164-1.269-1.359-1.583-.195-.315-.402-.61-.46-.655-.058-.046-.156-.29-.218-.542-.062-.252-.186-.458-.276-.458-.089 0-.163-.169-.164-.375-.001-.207-.113-.59-.25-.853-.354-.679-.349-5.209.006-5.679.135-.178.245-.449.245-.602 0-.266.932-2.152 1.148-2.325.058-.046.304-.39.547-.765.444-.686 2.755-2.563 3.168-2.573.121-.003.366-.116.544-.25.178-.135.478-.248.667-.251.188-.003.53-.116.759-.25.516-.302 3.126-.251 4 .079m85.667-.073c.229.131.642.243.917.249.275.007.645.122.823.256.178.135.459.245.625.245.166 0 .302.068.302.15 0 .083.211.224.47.315.974.339 3.849 3.611 3.868 4.402.003.119.116.362.25.54.135.178.245.497.245.708V34h-18.509l.255-.492c.14-.27.254-.645.254-.833 0-.188.07-.342.155-.342.086 0 .203-.148.26-.329.606-1.907 4.331-4.989 6.057-5.009.244-.003.59-.116.768-.25.433-.327 2.685-.324 3.26.005m74 0c.229.131.552.241.718.244.404.008 2.126.873 2.658 1.335.235.205.474.362.531.35.089-.018.555.492 1.747 1.914.377.45 1.346 2.393 1.346 2.7 0 .132.117.486.26.787.204.43.247 1.003.201 2.692-.056 2.04-.173 2.649-.729 3.783-.128.26-.232.546-.232.636 0 .091-.187.41-.417.711-.229.3-.416.619-.416.709 0 .215-2.247 2.389-2.47 2.389-.095 0-.273.094-.396.208-.216.202-.695.444-2.015 1.018-.856.372-4.398.393-4.879.029-.178-.134-.449-.247-.602-.25-.308-.006-1.247-.473-1.601-.797-.125-.114-.304-.208-.397-.208-.507 0-3.295-3.277-3.312-3.894-.003-.104-.116-.335-.25-.513a1.481 1.481 0 0 1-.25-.75 1.494 1.494 0 0 0-.25-.75c-.351-.464-.348-4.357.004-5.032.137-.263.249-.598.25-.746.003-.79 1.915-3.627 3.03-4.495.397-.309.76-.615.808-.68.154-.212 2.135-1.14 2.445-1.146.166-.003.489-.113.718-.244.266-.152.9-.238 1.75-.238s1.484.086 1.75.238m-241.191 3.292c.581.389 1.18.783 1.332.875.151.091.548.373.882.625.335.252.662.458.727.458.065 0 .403.225.75.5s.733.502.857.504c.236.005-.833.984-1.083.992-.078.002-.416.21-.751.462a13.32 13.32 0 0 1-.889.625c-.155.092-.856.561-1.557 1.042-1.475 1.013-2.007 1.052-2.744.203-.046-.052-.383-.275-.75-.495-.366-.219-.704-.444-.75-.5-.046-.055-.383-.281-.75-.502-.366-.221-.747-.48-.845-.575-.099-.095-.455-.321-.792-.502-.895-.482-.804-.707.637-1.582.367-.222.704-.45.75-.505.046-.056.384-.281.75-.5.367-.22.704-.445.75-.5.046-.056.384-.282.75-.503.367-.221.766-.498.887-.616.36-.351.726-.253 1.839.494M131.5 31.749c0-.058.131.025.292.186.16.16.61.494 1 .741l.709.45-.625.47c-.344.258-.681.549-.748.645-.068.097-.124.111-.125.031-.003-.152-1.164.666-1.375.969-.068.097-.124-.786-.125-1.961l-.003-2.136.5.356c.275.196.5.308.5.249m27.5 1.438c0 .3-.039.322-.258.14-.206-.171-.214-.242-.042-.351.298-.189.3-.188.3.211m-19.196 4.16c1.529 1.016 2.798 1.898 2.821 1.959.036.098-4.592 3.271-5.578 3.825-.366.205-.94.068-1.214-.29-.046-.06-.383-.288-.75-.508-.366-.219-.704-.444-.75-.5-.046-.055-.383-.28-.75-.5-.366-.219-.704-.444-.75-.5-.046-.055-.383-.283-.75-.505-.816-.496-1.25-.857-1.25-1.042 0-.076.062-.101.137-.055.075.047.334-.099.576-.323.242-.225.483-.408.537-.408.141 0 1.157-.727 1.223-.875.03-.069.127-.125.215-.125.187 0 1.203-.692 1.285-.875.03-.069.127-.125.215-.125.187 0 1.203-.692 1.285-.875.158-.357.972.044 3.498 1.722m15.863-1.692c0 .086.163.208.362.271.199.063.443.182.542.264.812.677.999.81 1.133.81.084 0 .251.094.371.208.12.115.377.319.571.454.317.219.354.404.354 1.771 0 1.582-.042 1.689-.839 2.144-.167.095-.841.535-1.496.977-1.33.897-1.571.886-2.733-.131-.266-.232-.55-.423-.632-.423-.081 0-.238-.076-.349-.17-.772-.651-1.02-.83-1.15-.83-.082 0-.239-.076-.35-.17-.767-.647-1.019-.83-1.141-.83-.233 0-.81-.56-.81-.787 0-.117.102-.213.227-.213s.482-.224.792-.497c.31-.274.629-.499.707-.5.078-.002.427-.228.774-.503.347-.275.685-.5.75-.5.065 0 .403-.225.75-.5s.705-.5.795-.5c.09 0 .258-.113.372-.25.226-.273 1-.346 1-.095M149 43.471c1.604 1.076 2.91 2.029 2.902 2.117-.023.268-5.582 3.912-5.963 3.909-.196-.001-.61-.226-.92-.5-.31-.273-.632-.497-.715-.497-.083 0-.242-.076-.353-.17-.772-.651-1.02-.83-1.15-.83-.082 0-.239-.076-.35-.17-.772-.651-1.02-.83-1.15-.83-.082 0-.239-.076-.35-.17-.11-.093-.372-.31-.582-.483l-.38-.313.63-.383c.347-.211.668-.429.714-.484.046-.056.384-.281.75-.5.367-.22.704-.445.75-.5.046-.056.384-.282.75-.503.367-.221.758-.479.87-.574.554-.474.683-.558 1.018-.664.199-.063.362-.185.362-.271 0-.285.236-.15 3.167 1.816m-16.622 1.442c.529.356.904.703.834.77-.071.068-.579.426-1.129.794l-1 .67-.091-.739c-.05-.407-.181-.83-.291-.941-.111-.11-.201-.565-.201-1.012v-.811l.458.311 1.42.958m7.296 4.85c1.6 1.061 2.927 1.98 2.949 2.041.022.062-1.17.919-2.65 1.905l-2.69 1.793-.886-.684c-1.297-1-2.947-2.746-3.55-3.755l-.31-.519.644-.397c.354-.218.645-.453.648-.522.002-.069.082-.125.178-.125.153 0 1.107-.604 1.326-.84.129-.139 1.239-.821 1.341-.824.05-.001 1.4.866 3 1.927m16.85-1.241c.334.263.69.478.792.478.368 0-.045 1.246-.598 1.804-.12.121-.218.314-.218.428 0 .269-2.855 3.271-3.109 3.269-.106 0-.767-.395-1.468-.876a58.083 58.083 0 0 0-1.555-1.042 10.025 10.025 0 0 1-.667-.448l-.387-.281.468-.298c.257-.164.505-.341.551-.394.046-.053.384-.276.75-.495.367-.22.704-.445.75-.5.046-.056.384-.282.75-.504.668-.403.893-.565 1.328-.955.127-.114.301-.208.385-.208.084 0 .327-.151.54-.336.46-.399.824-.321 1.688.358m-10.191 5.728c.114.137.282.25.372.25.09 0 .448.225.795.5.347.275.696.501.774.503 1.093.025 1.44 1.497.352 1.497-.218 0-.541.11-.719.245-.448.338-5.938.37-6.215.035-.141-.169-.033-.311.475-.625.362-.223.659-.461.662-.53.002-.069.082-.125.178-.125.163 0 1.014-.55 1.417-.917.101-.091.46-.315.797-.496s.612-.387.612-.458c0-.213.279-.146.5.121" fill="#41B3A3" fillRule="evenodd"/></svg>
                    </Col>
                </Row>
                <Row className="nav__navbar">
                    <Col
                        onMouseEnter={this.fadeIn.bind(this, 'about')}
                        onMouseLeave={ this.reset.bind(this) }
                        className="nav__nav-item"
                        xs={4}
                    >
                        <svg className={ svgClass } id="about" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                            <path stroke="#fff" d="M16 32C7.175 32 0 24.825 0 16S7.175 0 16 0s16 7.175 16 16-7.175 16-16 16zm13.494-13.812c-.469-.15-4.231-1.269-8.512-.581 1.788 4.912 2.512 8.912 2.656 9.744 3.063-2.075 5.25-5.356 5.856-9.163zM21.337 28.6c-.206-1.2-.994-5.375-2.913-10.363-.031.012-.063.019-.087.031-7.713 2.688-10.481 8.031-10.725 8.531a13.612 13.612 0 0 0 8.387 2.887c1.894 0 3.7-.387 5.338-1.087zM5.844 25.156c.313-.531 4.063-6.738 11.106-9.019.175-.056.356-.113.538-.162a50.041 50.041 0 0 0-1.106-2.319C9.563 15.7 2.938 15.612 2.338 15.606c-.006.137-.006.275-.006.419 0 3.506 1.331 6.712 3.512 9.131zM2.625 13.219c.612.006 6.244.031 12.637-1.662a86.017 86.017 0 0 0-5.069-7.906C6.368 5.457 3.505 8.982 2.624 13.22zM12.8 2.731a73.225 73.225 0 0 1 5.1 8c4.863-1.819 6.919-4.588 7.163-4.938A13.598 13.598 0 0 0 16 2.349a14.22 14.22 0 0 0-3.2.381zm13.781 4.65c-.288.388-2.581 3.325-7.631 5.388.319.65.625 1.313.906 1.981.1.238.2.469.294.706 4.55-.569 9.069.344 9.519.438a13.628 13.628 0 0 0-3.087-8.512z"/>
                        </svg>
                        <span ref="about" className={this.getClass('about')}>About</span>
                    </Col>
                    <Col
                        onMouseEnter={this.fadeIn.bind(this, 'skills')}
                        className="nav__nav-item"
                        xs={4}
                        onMouseLeave={ this.reset.bind(this) }
                    >
                        {//<svg className={ svgClass } id="skills" xmlns="http://www.w3.org/2000/svg" width="32" height="30">
                        }
                        <svg id="skills" className={ svgClass } xmlns="http://www.w3.org/2000/svg" width="32" height="30">
                            <path d="M0 2v20h32V2H0zm30 18H2V4h28v16zm-9 4H11l-1 4-2 2h16l-2-2z"/>
                        </svg>
                        <span ref="skills" className={ this.getClass('skills') }>Skills</span>
                    </Col>
                    <Col
                        onMouseEnter={this.fadeIn.bind(this, 'contact')}
                        className="nav__nav-item"
                        xs={4}
                        onMouseLeave={ this.reset.bind(this) }
                    >
                        <svg className={ svgClass } id="contact" xmlns="http://www.w3.org/2000/svg" width="32" height="30">
                            <path d="M13 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/><path d="M20 10l10.3-4.443-.743-1.857L17 8h-2L2.443 3.7 1.7 5.557 12 10v8L7.898 31.268l1.87.709L15.572 19h.857l5.804 12.977 1.87-.709L20.001 18z"/></svg>
                        <span ref="contact" className={ this.getClass('contact') }>Contact</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Nav;