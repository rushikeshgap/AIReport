import React, { useRef, useState } from 'react'
import { Col, Dropdown, Form, Row, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Select from 'react-select';



const Report = () => {
    let fileInputRef = useRef(null);
    const [productLineId, setProductLineId] = useState("");
    let options = [{ value: 'Neutrophils', label: 'Neutrophils' },
        { value: 'Monocyte', label: 'Monocyte' },
        ]
    const [selectedItems, setSelectedItems] = useState([]);
    let demo=[
        {date: "2024-11-04", Neutrophils: 7.8, Monocyte: 6.3}
    ]
    const [addedData, setAddedData] = useState(demo)
//   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const [formData, setFormData] = useState({
        
    });
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result)
            };
            reader.onerror = reject
        })
    }
    const handleSelectChange = (event) => {
        const { value } = event.target;
        if (value == "") {
            // setSelectedOption("");
            // setProductLineId("");
            // handleBlur(event, "");
        }
        else {
            // let divisionName = productTypes.filter(obj => obj.productLineId == value);
            // setSelectedOption(divisionName[0].divisionCode);
            // setProductLineId(value);
            // handleBlur(event, divisionName[0].divisionCode);
        }

        setSelectedItems(value);
        //setShowForm(value !== ''); // Show the form field if an option is selected
    };
    const handleSubmit = () => {
        //UpsertProductCustomerDealer 
        
    }
    const handleSelect = (event) => {
        const value = event.target.value;
        setSelectedItems(prev =>
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
      };


  return (
    <div className=" m-5" >
        
                
                    < Form.Group className="">
                        <Form.Label >
                            Upload images <span className="req-t">*</span>
                        </Form.Label>
                        <Form.Control
                            type="file"
                            ref={fileInputRef}
                            multiple
                            // value={formData.serialNo}
                            onChange={async (e) => {
                                let data = await getBase64(e.target.files[0]);

                                setFormData({ ...formData, retailerInvoiceCopy: data })
                            }
                            }

                        />
                    </Form.Group>
            
            <Col >
            <Form.Group controlId="multiSelect">
        <Form.Label>Select Options<span className="req-t">*</span></Form.Label>
        <Select 
            // value={selectedItems}
            options={options}
            isMulti
            // onChange={handleSelectChange}
            >
        
        </Select>
      </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                            <Form.Group className="">

                                                <Form.Label>
                                                    {/* {RedirectionRouteField === "DealerField" ? "CG Invoice date" : "Dealer Invoice date"} */}
                                                    Report Generated date
                                                    <span className="req-t">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    // max={currentDate}
                                                    // min={minInvoiceDate}
                                                    value={formData.invoiceDate}
                                                    onChange={(e) => setFormData({ ...formData, invoiceDate: e.target.value })}
                                                />


                                            </Form.Group>
                                        </Col>
       
        <Row className=" mt-5" 
        // style={{
        //                             gap: '10px',
        //                             justifyContent: 'center'
        //                         }}
                                >
                                    

                                    <Col style={{
                                        display: 'contents'
                                    }}><Button variant="primary"
                                        // disabled={!firstTabNext || addedData?.length == 0}
                                        className="add-Btn " onClick={() => {


                                            handleSubmit()

                                        }}
                                    >Submit</Button></Col>
                                    
                                </Row>

                                 <Table responsive bordered className="mt-3">

                                             <thead>
                                              <tr style={{
                                                    fontSize: '12px'
                                                }}>
                                                    {/* <th className="hide-column">Index</th> */}
                                                    <th>date</th>
                                                    {/* <th>Product Line</th> */}
                                                    <th>Neutrophils</th>
                                                    {/* <th>Product Type</th>
                                                        <th>Frame Size</th>
                                                        <th>Pole</th>
                                                        <th>Voltage</th> */}
                                                    <th>Monocyte</th>
                                                   
                                                </tr>
                                            </thead>



                                            <tbody >
                                                {
                                                    addedData?.map((add, index) => {
                                                        return (

                                                            <tr style={{
                                                                fontSize: '12px'
                                                            }} key={index}>
                                                                <td className="hide-column">{add?.date ? add?.date : "-"}</td>
                                                                <td>{add?.Neutrophils ? add?.Neutrophils : "-"}</td>
                                                                {/* <td>{add?.productLine}</td> */}
                                                                <td>{add?.Monocyte ? add?.Monocyte : "-"}</td>
                                                                {/* <td>{add?.productType? add?.productType : "-"}</td>
                                                                        <td>{add?.frameSize ? add?.frameSize: "-"}</td>
                                                                        <td>{add?.pole ? add?.pole : "-"}</td>
                                                                        <td>{add?.voltage ? add?.voltage: "-"}</td> */}
                                                                
                                                            </tr >

                                                        )
                                                    })
                                                }




                                            </tbody>
                                        </Table>
    </div>
  )
}

export default Report