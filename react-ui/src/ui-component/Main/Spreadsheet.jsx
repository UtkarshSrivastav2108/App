import React from 'react'
import {
     CellDirective, CellsDirective, CellStyleModel, ColumnDirective, ColumnsDirective, getFormatFromType, RangeDirective, RangeModel, RangesDirective, RowDirective, RowsDirective, SheetDirective,
     SheetsDirective, SpreadsheetComponent
} from '@syncfusion/ej2-react-spreadsheet';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { defaultData } from '../../Data/data';
import styles from './Spreadsheet.module.css'


function Spreadsheet() {
     let SSObj = null;
     const remoteData = new DataManager({
          url: "https://ej2services.syncfusion.com/production/web-services/api/Orders",
          adaptor: new WebApiAdaptor,
          crossDomain: true

     })
     const boldCenter = { fontWeight: '800', textAlign: 'center', borderColor: 'yellow', border: '1px solid yellow' };
     const shortCenter = { fontWeight: 'bold', textAlign: 'center', color: 'red', backgroundColor: 'lightgray' };
     const currencyFormat = getFormatFromType("Currency");


     // Tooltip

     return (
          <>

               <SpreadsheetComponent allowOpen={true}
                    ref={(ss => SSObj = ss)}
                    openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
                    allowSave={true}
                    saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save">
                    <SheetsDirective >
                         <SheetDirective name='Monthly Budget'>
                              <RangesDirective>
                                   <RangeDirective dataSource={defaultData}></RangeDirective>
                              </RangesDirective>

                              <RowsDirective>
                                   <RowDirective>
                                        <CellsDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>


                                        </CellsDirective>
                                   </RowDirective>
                              </RowsDirective>




                              <ColumnsDirective >
                                   <ColumnDirective width={100}></ColumnDirective>
                              </ColumnsDirective>


                         </SheetDirective>
                    </SheetsDirective>
               </SpreadsheetComponent>


               {/* <SpreadsheetComponent ref={(ss => SSObj = ss)}
                    openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
                    allowSave={true}
                    saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save">
                    <SheetsDirective>
                         <SheetDirective name='Monthly Budget'>
                              <RangesDirective>
                                   <RangeDirective dataSource={remoteData}></RangeDirective>
                              </RangesDirective>


                              <RowsDirective>
                                   <RowDirective>
                                        <CellsDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                             <CellDirective style={boldCenter}></CellDirective>
                                        </CellsDirective>
                                   </RowDirective>
                              </RowsDirective>




                              <ColumnsDirective >
                                   <ColumnDirective width={80} style={shortCenter} className="target" ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target'  ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>
                                   <ColumnDirective width={80} style={shortCenter} className='target' ></ColumnDirective>

                              </ColumnsDirective>
                         </SheetDirective>
                    </SheetsDirective>
               </SpreadsheetComponent> */}


          </>
     )
}

export default Spreadsheet