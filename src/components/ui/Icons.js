import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styles from "./ParttwoStyles.module.css";

const Icons = () => {
  return (
    <>
      <section className={styles["parttwo-section"]}>
        {/* <aside className={styles["parttwo-body"]}> */}
          <Row className={styles["content-container"]}>
            <Col xs={12} md={4} className={styles["aside-sect-one"]}>
              <h5>Col One Cntent</h5>
            </Col>
            <Col xs={12} md={4} className={styles["aside-sect-two"]}>
              <h5>Col Two Content</h5>
            </Col>
            <Col xs={12} md={4} className={styles["aside-sect-one"]}>
              <h5>Col Three Content</h5>
            </Col>
          </Row>
        {/* </aside> */}
      </section>
    </>
  );
};
export default Icons;
