import * as React from "react";
import { useDropzone } from "react-dropzone";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { post } from "../axios";
import {
    Container,
    NavBar,
    NavBarContainer,
    Notifications,
    TopRow,
    Upload
} from "./DashboardStyled";
import { PhotoWidget } from "./PhotoWidget";

interface Props {}

type ImageFile = {
    image: File;
    error: boolean;
};

const Dashboard: React.FC<RouteComponentProps> = (
    props: RouteComponentProps
) => {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [uploading, setUploading] = React.useState<boolean>(false);
    const [uploadedPictures, setUploadedPictures] = React.useState<any[]>([]);
    const [
        currentPicture,
        setCurrentPicture
    ] = React.useState<ImageFile | null>(null);

    const token = localStorage.getItem("access_token");

    const setCurrentAndPop = () => {
        if (uploadedPictures.length > 1) {
            const uploadedPop = uploadedPictures.slice(1);
            setUploadedPictures(uploadedPop);
            setCurrentPicture(uploadedPop[0]);
        } else if (uploadedPictures.length === 1) {
            setCurrentPicture(uploadedPictures[0]);
            setUploadedPictures([]);
        } else {
            setCurrentPicture(null);
        }
    };

    const onDrop = React.useCallback(async files => {
        setUploading(true);
        for (const file in files) {
            let formData = new FormData();
            formData.set("caption", "");
            formData.append("image", files[file]);
            const headers = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            };

            const response = await post("/image", formData, headers);
            if (!currentPicture) {
                setCurrentPicture(response.image.data);
            }

            if (!response.error) {
                setUploadedPictures([...uploadedPictures, response.image.data]);
            }
        }
        setUploading(false);
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop
    });
    const files = acceptedFiles.map(file => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));
    React.useEffect(() => {
        if (!localStorage.getItem("access_token")) {
            props.history.push("/");
        }
    }, []);
    const navSlideout = useSpring({
        width: "20rem",
        backgroundColor: "red",
        height: "100vh",
        position: "absolute",
        top: "0%",
        left: "0%",
        transform: toggle ? "translateX(5rem)" : "translateX(-15rem)"
    });

    const onClickToggle = () => {
        setToggle(!toggle);
    };

    return token ? (
        <Container>
            <NavBarContainer>
                <NavBar>
                    <button onClick={onClickToggle}>Toggle</button>
                </NavBar>
                <animated.div style={navSlideout} />
            </NavBarContainer>
            <TopRow>
                <Upload>
                    {!currentPicture ? (
                        <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            <p>Drag image files here or Select...</p>
                        </div>
                    ) : uploading ? (
                        <p>Loading...</p>
                    ) : (
                        <PhotoWidget
                            img={currentPicture}
                            confirm={setCurrentAndPop}
                        />
                    )}
                </Upload>
                <Notifications />
            </TopRow>
        </Container>
    ) : (
        <></>
    );
};

export default withRouter(Dashboard);
