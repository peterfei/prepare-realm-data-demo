import Realm from "realm";
import Migrations from "./Migrations";

let a = Migrations;
//  realm = null;
// debugger
const realm = new Realm(Migrations[Migrations.length - 1]);
console.log(`realm's path is ${realm.path}`)

async function closeDb() {
    db = await Realm.open({
        path: a[0].path
    });
    db.close();
    realm = new Realm(Migrations[Migrations.length - 1]);

}
const saveDemo = async demo => {
    // debugger
    if (realm == null) {
        realm = await Realm.open({
            path: a[0].path
            // schema: a[0].schema,
            // schemaVersion: a[0].schemaVersion
        });
        console.log("realm path:" + realm.path);
    }
    try {
        realm.write(() => {
            // debugger
            // if()
            let oldDemo = realm.objects("Demo");
            let count = oldDemo.length;
            // debugger
            if (oldDemo == null || count == 0) {
                realm.create("Demo", demo);
            } else {
                // oldExamQues[count - 1].id = questions.id;

                demo.name != undefined ? oldDemo[count - 1].name = demo.name : null;


            }
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    saveDemo
};
